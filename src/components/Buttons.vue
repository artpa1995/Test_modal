<template>
 <button class="btn">{{ value }}</button>
</template>

<script>
export default {
 props: {
     value : String,
 }
};
</script>

<style>
.btn{
    margin-top:36px;
    position: relative;
    color: white;
    background: linear-gradient(90deg, rgba(146,64,252,1) 0%, rgba(225,153,252,1) 100%);
    border: 0;
    padding: .9em 2.6em;
    border-radius: 2em;
    font-weight: 700;
    letter-spacing: 1px;
}
.btn.loading {
    color: rgba(0, 0, 0, 0);
    user-select: none;
    background:  var( --color-head_r1);
}
.btn.loading::after {
    content: "";
    display: block;
    position: absolute;
    background-image: url("/images/loading.svg");
    width: 28px;
    height: 28px;
    top: 50%;
    left: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    animation: loading-animation 1s linear infinite;
}
.btn.large {
    padding: 1em 5em;
}
.btn.modern {
    background: var( --color2);
    background: linear-gradient(90deg, var( --color1) 0%, var( --color2) 100%);
    border-radius: .3em;
    padding: .7em 2em;
}
.btn:enabled:not(.loading):hover{
    box-shadow: 0 0 .2em var( --color3);
    cursor: pointer;
}
.btn:enabled:not(.loading):active {
    background: var( --color4);
}
.btn:disabled{
    background: #C4C4C4;
}

@keyframes loading-animation {
    from{
        transform: translate(-50%, -47%) rotate(0turn);
    }
    to {
        transform: translate(-50%, -47%) rotate(1turn);
    }
}
</style>
