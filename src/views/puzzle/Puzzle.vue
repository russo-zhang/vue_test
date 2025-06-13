<template>
    <div id="forPuzzle"></div>
    <ul id="menu">
        <li>&#x2630;</li>
        <li>default image</li>
        <li>load image</li>
        <li>
            shape:
            <select id="shape">
                <option value="1" selected>classic</option>
                <option value="2">triangle</option>
                <option value="3">round</option>
                <option value="4">straight</option>
            </select>
        </li>
        <li>12 pieces</li>
        <li>25 pieces</li>
        <li>50 pieces</li>
        <li>100 pieces</li>
        <li>200 pieces</li>
    </ul>
</template>
<script setup>
import { usePuzzle } from "./hook.js";
const { initPuzzle } = usePuzzle();
</script>
<style>
@import url("@/views/puzzle/index.css");
</style>
