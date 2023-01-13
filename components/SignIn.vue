<template>
    <div class="w-full flex h-screen font-serif">
        <div class="w-1/2 bg-myBlue h-screen flex items-center justify-center">
            <div class="w-4/6 text-center m-auto">
                 <Logo/>
                 <h1 class="text-white text-xl">Welcome Back</h1>
                 <p class="text-white text-sm opacity-70">Just a couple of clicks and we start</p>
                 <Bar/>
            </div>
        </div>
        <div class="w-1/2 bg-white  h-screen flex items-center justify-center">
             <div class="w-4/6 text-center m-auto p-5 flex flex-col">
                 <h1 class="text-4xl text-myBlue mb-5 place-self-start">Sign In</h1>
                 <form>
                    <label class="text-myBlue font-medium inline-block w-full text-start text-sm">Email <br/>
                        <input class="w-full p-3 bg-inputGray" type="email" placeholder="johndoe@gmail.com"/>
                    </label> <br/><br/>
                    <label class="text-myBlue font-medium inline-block w-full text-start text-sm">Password <br/>
                        <input class="w-full p-3 bg-inputGray" type="password" placeholder="***************"/>
                    </label> <br/><br/>
                    <button class="w-full bg-btnYellow p-3 mb-3">Sign In</button>
                    <p><span class="opacity-60">Don’t have an account?</span> <a href="/SignUp" class="cursor-pointer"><span class="text-lightBlue">Sign Up</span></a></p>
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
