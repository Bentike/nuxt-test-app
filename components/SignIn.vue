<template>
    <div class="w-full flex h-screen">
        <div class="w-1/2 bg-myBlue h-screen flex items-center justify-center">
             <div class="w-4/6 text-center m-auto">
                 <h1 class="text-white">Welcome Back</h1>
                 <p class="text-white">Just a couple of clicks and we start</p>
                 <Bar/>
             </div>
        </div>
        <div class="w-1/2 bg-white  h-screen flex items-center justify-center">
             <div class="w-4/6 text-center m-auto">
                 <h1>Sign In</h1>
             </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>