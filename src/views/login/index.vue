<template>
  <div v-uiloading="uiloading" class="page-login-scrollbar-wrap">
    <el-scrollbar always class="page-login-scrollbar">
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <div class="flex justify-center">
              <svg-icon class="text-6xl" name="workflow-mark-indigo-600" />
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              Or
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  v-model="basicForm.name"
                  required=""
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="admin"
                >
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input
                  v-model="basicForm.password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required=""
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="123456"
                >
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  name="remember-me"
                  type="checkbox"
                  class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                >
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div class="text-sm">
                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click.prevent="submitForm"
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> -->
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import debounce from 'lodash/debounce'
// import { LockClosedIcon } from '@heroicons/vue/solid'
import { useMainStore } from '~/store'
export default defineComponent({
  name: 'Login',
  components: {
    // LockClosedIcon
  },
  setup() {
    const router = useRouter()
    const useMain = useMainStore()
    const basicForm = reactive({
      name: '',
      password: ''
    })
    const uiloading = ref(false)
    const submitForm = debounce(() => {
      if (basicForm.name !== 'chenyu' || basicForm.password !== 'chenyuyuchen') {
        ElMessage({
          message: '请输入账号密码',
          type: 'warning'
        })
        return false
      }
      uiloading.value = true
      useMain.setLogin('this_is_my_token').then(() => {
        uiloading.value = false
        router.push({ path: '/' })
      })
    }, 500, { leading: true, trailing: false })
    return {
      basicForm,
      uiloading,
      submitForm
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
