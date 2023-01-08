<template>
    <div class="w-full flex h-screen">
        <div class="w-1/2 bg-myBlue h-screen flex items-center justify-center">
            <div class="w-4/6 text-center m-auto">
                 <Logo/>
                 <h1 class="text-white text-xl">Welcome Back</h1>
                 <p class="text-white text-sm opacity-70">Just a couple of clicks and we start</p>
                 <Bar/>
            </div>
        </div>
        <div class="w-1/2 bg-white  h-screen flex items-center justify-center">
             <div class="w-4/6 text-center m-auto">
                 <h1 class="text-4xl text-myBlue">Sign In</h1>
                 <form>
                    <label>Email <br/>
                        <input type="email" placeholder="johndoe@gmail.com"/>
                    </label> <br/><br/>
                    <label>Password <br/>
                        <input type="password" placeholder="***************"/>
                    </label> <br/><br/>
                    <button>Sign In</button>
                    <p>Don’t have an account? <span class="text-lightBlue">Sign Up</span></p>
                 </form>
             </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SignIn'
}
</script>