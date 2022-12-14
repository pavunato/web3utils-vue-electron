<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="flex flex-col">
    <h2>Encode Function</h2>
    <div class="cursor-pointer" @click="clearAll()">Clear</div>
    <div v-for="(input, index) in inputs" :key="input" class="flex flex-auto">
      <div class="relative mt-1 rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <label for="type" class="sr-only">Type</label>
          <select id="type" name="type" v-model="input.type" class="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            <option disabled value="">select type</option>
            <option v-for="option in pre_options" :key="option">
              {{option}}
            </option>
          </select>
        </div>

        <input type="text" name="price" @keyup.delete="remove(index, true)" @keyup.enter="addNew(index)" ref="index" v-model="input.value" id="price" class="block w-full rounded-md border-gray-300 pl-[100px] focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00">
      </div>
      <div  class="cursor-pointer" @click="remove(index, false)">Remove</div>
    </div>
    <div>Result: {{encodeFun()}}</div>
    <div>ref: {{$refs}}</div>

  </div>
</template>

<script>
export default {
  name: 'EncodeFunction',
  data() {
    return {
      total: 3,
      message: '',
      pre_options: ['address', 'uint256', 'string'],
      inputs: [
        {
          type: '',
          value: ''
        }
      ]
    }
  },
  methods: {
    encodeFun() {
      return this.inputs
    },
    async addNew(id) {
      console.log('id', id);
      this.inputs.push({type: '',value: ''});
      this.$refs.index[id+1].focus();
    },
    clearAll() {
      this.inputs = [{type: '',value: ''}]
    },
    remove(id, byKey) {
      if (byKey && this.inputs[id].value.length > 0) return;
      if (this.inputs.length == 1) {
        this.clearAll();
        return;
      }
      this.inputs.splice(id, 1);
      this.$refs.index[id-1].focus();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
