<template>
    <div>
        <div class="w-full flex h-screen">
        <div class="w-1/2 bg-myBlue h-screen flex items-center justify-center">
            <div class="w-4/6 text-center m-auto">
                 <Logo/>
                 <h1 class="text-white text-xl">Welcome Aboard</h1>
                 <p class="text-white text-sm opacity-70">Just a couple of clicks and we start</p>
                 <Bar/>
            </div>
        </div>
        <div class="w-1/2 bg-white  h-screen flex items-center justify-center">
             <div class="w-4/6 text-center m-auto">
                 <h1 class="text-4xl text-myBlue mb-5 place-self-start">Create Account</h1>
                 <form>
                    <div class="flex w-full justify-between">
                        <div class="w-[47%]">
                            <label class="text-myBlue font-medium inline-block w-full text-start"> FirstName
                                <input class="w-full p-3 bg-inputGray" type="text" placeholder="John">
                            </label>
                        </div>
                        <div class="w-[47%]">
                            <label  class="text-myBlue font-medium inline-block w-full text-start"> LastName
                                <input class="w-full p-3 bg-inputGray" type="text" placeholder="Doe">
                            </label>
                        </div>
                    </div> <br>
                    <label class="text-myBlue font-medium inline-block w-full text-start">Email <br/>
                        <input class="w-full p-3 bg-inputGray" type="email" placeholder="johndoe@gmail.com"/>
                    </label> <br/><br/>
                    <div class="flex w-full justify-between">
                        <div class="w-[47%]">
                            <label class="text-myBlue font-medium inline-block w-full text-start"> Password
                                <input class="w-full p-3 bg-inputGray" type="password" placeholder="**********">
                            </label>
                        </div>
                        <div class="w-[47%]">
                            <label  class="text-myBlue font-medium inline-block w-full text-start"> Confirm Password
                                <input class="w-full p-3 bg-inputGray" type="passwrod" placeholder="**********">
                            </label>
                        </div>
                    </div>   <br/><br/>
                    <button class="w-full bg-btnYellow p-3 mb-3">Sign Up</button>
                    <p><span class="opacity-60">Don’t have an account?</span> <span class="text-lightBlue">Sign In</span></p>
                 </form>
             </div>
        </div>
    </div>
    </div>
</template>

<script>
 export default {
    name: "Register"
 }
</script>