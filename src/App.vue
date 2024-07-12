<script setup lang="ts">
import Com01 from './components/basic/Com01.vue'
import Com02 from './components/pesudo-classes/Com02.vue'
import Com03 from './components/pesudo-classes/Com03.vue'
import FormCom from "./components/pesudo-classes/FormCom.vue"
import BaseParentState from './components/pesudo-classes/BaseParentState.vue'
import DiffParentCom from './components/pesudo-classes/DiffParentCom.vue'
import SiblingModifier from './components/pesudo-classes/SiblingModifier.vue'
import DirectChildrenCom from './components/pesudo-classes/DirectChildrenCom.vue'
import DescendantsCom from './components/pesudo-classes/DescendantsCom.vue'
</script>

<template>
  <div>
    <Com01/>
    <Com02/>
    <Com03/>
    <FormCom/>
    <BaseParentState />
    <DiffParentCom />
    <SiblingModifier />
    <DirectChildrenCom />
    <DescendantsCom />
  </div>
</template>
