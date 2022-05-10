<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div 
      :class="option"
        v-for="(option, i) of options"
        :key="i"
        @click="
         selectLang($event);
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
     active: false ,
     lang : '',
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
    methods:{
     selectLang: function (event) {
      let langs  = event.target.className;
      this.$i18n.locale = 'ru';
      localStorage.setItem('lang', 'ru');
     
      if (langs == 'EN') {
        this.$i18n.locale = 'en';
        localStorage.setItem('lang', 'en');
      }
      if (langs == 'Հայ') {
        this.$i18n.locale = 'arm';
        localStorage.setItem('lang', 'arm');
      }
    }
  },
};
</script>

<style scoped>

.custom-select {
  position: relative;
  width: 80px;
  text-align: left;
  outline: none;
}
.custom-select .selected {
  color: #1D4685;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  font-family: var( --font_head);
  font-style: normal;
  font-weight: bold;
  font-size: 1.125rem;
}
.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 9px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #1D4685 transparent transparent transparent;
}
.custom-select .items {
  color: #1D4685;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 28px;
  z-index: 1;
  background: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(155, 155, 155, 0.25);
}
.custom-select .items div {
  color: #1D4685;
  cursor: pointer;
  user-select: none;
  font-family: var( --font_head);
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.25rem;
  text-align: center;
}
.custom-select .items div:hover {
  background: linear-gradient(265.11deg, var( --color-head_r1) -0.1%, var( --color-head_r2) 97.28%);
  color: #1D4685;
}
.selectHide {
  display: none;
}
@media screen and (max-width: 1024px) {
  .custom-select .selected {
    color: white;
    margin-top: 1.25rem;
  }
  .custom-select .selected:after {
    border-color: white transparent transparent transparent;
    top: 28px;
  }
  .custom-select .items {
    top: 45px;
  }
}
</style>
