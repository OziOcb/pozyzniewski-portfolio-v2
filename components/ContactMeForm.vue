<template>
  <form
    name="Contact Me"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>
        Don’t fill this out:
        <input name="bot-field" />
      </label>
    </p>

    <!-- TODO: #014k - Refactore the ContactMeForm.vue component (on Hold column) -->
    <!--
      - use 'v-for' to DRY the code
      - find out how to use v-model with v-for and Vuelidate (I spent few hours on that already)
    -->
    <BaseInput
      id="name"
      v-model:value.trim="formResponses.name"
      type="text"
      label="Name*"
      :class="{
        'formField--error': errors && v$.formResponses.name.$invalid,
        'formField--success': errors && !v$.formResponses.name.$invalid,
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="v$.formResponses.name.required.$invalid">
          this field is required.
        </span>
        <span v-if="v$.formResponses.name.minLength.$invalid">
          Field must have at least
          {{ v$.formResponses.name.minLength.$params.min }} characters.
        </span>
      </p>
    </BaseInput>

    <BaseInput
      id="email"
      v-model:value.trim="formResponses.email"
      type="email"
      label="Email*"
      :class="{
        'formField--error': errors && v$.formResponses.email.$invalid,
        'formField--success': errors && !v$.formResponses.email.$invalid,
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="v$.formResponses.email.required.$invalid">
          this field is required.
        </span>
        <span v-if="v$.formResponses.email.email.$invalid">
          Needs to be a valid email.
        </span>
      </p>
    </BaseInput>

    <BaseInput
      id="phone"
      v-model:value.trim="formResponses.phone"
      type="tel"
      label="Phone"
      :class="{
        'formField--error': errors && v$.formResponses.phone.$invalid,
        'formField--success': errors && !v$.formResponses.phone.$invalid,
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="v$.formResponses.phone.numeric.$invalid">
          Needs to be a valid phone number.
        </span>
        <span v-if="v$.formResponses.phone.minLength.$invalid">
          Field must have at least
          {{ v$.formResponses.phone.minLength.$params.min }} characters.
        </span>
      </p>
    </BaseInput>

    <BaseInput
      id="webOrCompanyName"
      v-model:value.trim="formResponses.webOrCompanyName"
      type="text"
      label="Website Or Company Name"
      :class="{
        'formField--error':
          errors && v$.formResponses.webOrCompanyName.$invalid,
        'formField--success':
          errors && !v$.formResponses.webOrCompanyName.$invalid,
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="v$.formResponses.webOrCompanyName.minLength.$invalid">
          Field must have at least
          {{ v$.formResponses.webOrCompanyName.minLength.$params.min }}
          characters.
        </span>
      </p>
    </BaseInput>

    <BaseInput
      id="message"
      v-model:value.trim="formResponses.message"
      type="textarea"
      label="Message*"
      :class="{
        'formField--error': errors && v$.formResponses.message.$invalid,
        'formField--success': errors && !v$.formResponses.message.$invalid,
      }"
    >
      <p v-if="errors" class="error">
        <span v-if="v$.formResponses.message.required.$invalid">
          this field is required.
        </span>
        <span v-if="v$.formResponses.message.minLength.$invalid">
          Field must have at least
          {{ v$.formResponses.message.minLength.$params.min }} characters.
        </span>
      </p>
    </BaseInput>

    <baseButton class="submitBtn" :disabled="uiState === 'pending'">
      Send Message
    </baseButton>

    <p v-if="errors" class="error">The form above has errors!</p>
    <p v-else-if="empty && uiState === 'submit clicked'" class="error">
      The form above is empty!
    </p>
    <p v-else-if="uiState === 'pending'" class="success">
      Sending the data! Please wait...
    </p>
    <p v-else-if="uiState === 'form submitted'" class="success">
      Hooray! Your form was submitted!
      <br />
      Check your email for the confirmation message.
    </p>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email, numeric } from "@vuelidate/validators";

export default {
  setup() {
    return {
      v$: useVuelidate({ $autoDirty: true }),
    };
  },
  data() {
    return {
      uiState: "submit not clicked",
      errors: false,
      empty: true,
      formResponses: {
        name: null,
        email: null,
        phone: null,
        webOrCompanyName: null,
        message: null,
      },
    };
  },
  validations() {
    return {
      formResponses: {
        name: {
          required,
          minLength: minLength(2),
        },
        email: {
          required,
          email,
        },
        phone: {
          numeric,
          minLength: minLength(8),
        },
        webOrCompanyName: {
          minLength: minLength(2),
        },
        message: {
          required,
          minLength: minLength(12),
        },
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      this.empty = !this.v$.formResponses.$anyDirty;
      this.errors =
        !!this.v$.formResponses.$errors.length ||
        !!this.v$.formResponses.$silentErrors.length;
      this.uiState = "submit clicked";
      if (this.errors === false && this.empty === false) {
        this.uiState = "pending"; // Disable the button while the form is submiting
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": e.target.getAttribute("name"),
            ...this.formResponses,
          }),
        })
          .then(() => {
            this.uiState = "form submitted";
            this.formResponses = {
              name: null,
              email: null,
              phone: null,
              webOrCompanyName: null,
              message: null,
            };
          })
          .catch((error) => alert(error));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.submitBtn {
  display: block;
  margin: 2rem auto;
  @media (min-width: $breakpoint-lg) {
    margin: 2rem 0;
  }
}

.success,
.error {
  position: absolute;
  margin: $size-input-error-margin;
  font-size: 12px;
  text-transform: uppercase;
}
.success {
  color: $color-green;
}
.error {
  color: $color-red;
}
</style>
