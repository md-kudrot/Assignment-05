const cartContainar = document.getElementById("cartContainar")
const popUpDiv = document.getElementById("popUpDiv")

const allBtn = document.getElementById("all-btn")
const openBtn = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")

const allCart = []
const openArr = [];
const closeArr = [];


async function cartData() {
    const api = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const dataObj = await api.json()

    renderCartData(dataObj.data)
    dataObj.data.forEach(item => {
        allCart.push(item)
    })


    const openItem = dataObj.data.filter(item => item.status === "open")
    openItem.forEach(item => {
        openArr.push(item)
    })

    const closeItem = dataObj.data.filter(item => item.status === "closed")
    closeItem.forEach(item => {

        closeArr.push(item)
    })

}


function renderCartData(dataArr) {
    cartContainar.innerHTML = ' '

    dataArr.forEach(element => {

        // date formating
        const createdDate = element.createdAt
        const formattedDate = new Date(createdDate).toLocaleDateString('en-US')


        const div = document.createElement("div")
        div.className = 'bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm'
        // console.log(element)
        div.innerHTML = `
        <div onclick="showPopUp(${element.id})" class="bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm h-[24rem] cursor-pointer">
                    <div class="h-1.5 w-full  ${element.priority === "low" ? "bg-[#A855F7]" : "bg-[#00A96E]"} rounded-t-xl"></div>


                    <div class=" p-4  space-y-4">
                        <div class="flex items-center justify-between">
                            <img src=" ${element.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="logo">
                            <button
                                class="bg-[#FEECEC] text-[#EF4444] font-medium px-2 py-1 rounded-2xl w-[5rem]">${element.priority}</button>
                        </div>

                        <div class="">
                            <h1 class="text-[#000000] font-semibold text-xl ">${element.title}</h1>
                            <p class="text-[#64748B] mt-2 line-clamp-2">${element.description}</p>
                        </div>

                        <div class="flex gap-2">
                            <button class="bg-[#FEECEC] text-[#EF4444] font-medium px-2 py-1 rounded-2xl w-[5rem]"><i
                                    class="ri-bug-line"></i> BUG</button>
                            <div class="flex items-center bg-[#FDE68A] font-medium px-2 py-1 rounded-2xl w-fit">
                                <img width="16px" src="./assets/Lifebuoy.png" alt="Lifebuoy">
                                <button class=" text-[#D97706] font-medium ml-1 py-1 rounded-2xl  ">Help Wanted</button>
                            </div>
                        </div>
                    </div>



                    <div class="p-4 border-t border-gray-200">
                        <p class="text-[#64748B]">#${element.id} ${element.author}</p>
                        <p class="text-[#64748B] mt-2">${formattedDate}</p>
                    </div>
                </div>
        `
        cartContainar.appendChild(div)
    });
}

function renderOpenCart(openArr) {
    cartContainar.innerHTML = ' '
    // console.log(openArr)
    openArr.forEach(element => {

        // date formating
        const createdDate = element.createdAt
        const formattedDate = new Date(createdDate).toLocaleDateString('en-US')


        const div = document.createElement("div")
        div.className = 'bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm'
        // console.log(element)
        div.innerHTML = `
        <div onclick="showPopUp(${element.id})" class="bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm h-[24rem] cursor-pointer">
                    <div class="h-1.5 w-full  ${element.priority === "low" ? "bg-[#A855F7]" : "bg-[#00A96E]"} rounded-t-xl"></div>


                    <div class=" p-4  space-y-4">
                        <div class="flex items-center justify-between">
                            <img src=" ${element.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="logo">
                            <button
                                class="bg-[#FEECEC] text-[#EF4444] font-medium px-2 py-1 rounded-2xl w-[5rem]">${element.priority}</button>
                        </div>

                        <div class="">
                            <h1 class="text-[#000000] font-semibold text-xl ">${element.title}</h1>
                            <p class="text-[#64748B] mt-2 line-clamp-2">${element.description}</p>
                        </div>

                        <div class="flex gap-2">
                            <button class="bg-[#FEECEC] text-[#EF4444] font-medium px-2 py-1 rounded-2xl w-[5rem]"><i
                                    class="ri-bug-line"></i> BUG</button>
                            <div class="flex items-center bg-[#FDE68A] font-medium px-2 py-1 rounded-2xl w-fit">
                                <img width="16px" src="./assets/Lifebuoy.png" alt="Lifebuoy">
                                <button class=" text-[#D97706] font-medium ml-1 py-1 rounded-2xl  ">Help Wanted</button>
                            </div>
                        </div>
                    </div>



                    <div class="p-4 border-t border-gray-200">
                        <p class="text-[#64748B]">#${element.id} ${element.author}</p>
                        <p class="text-[#64748B] mt-2">${formattedDate}</p>
                    </div>
                </div>
        `
        cartContainar.appendChild(div)
    });
}

function renderCloseCart(dataArr) {
    cartContainar.innerHTML = ' '
    // console.log(dataArr)
    dataArr.forEach(element => {

        // date formating
        const createdDate = element.createdAt
        const formattedDate = new Date(createdDate).toLocaleDateString('en-US')


        const div = document.createElement("div")
        div.className = 'bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm'
        // console.log(element)
        div.innerHTML = `
        <div onclick="showPopUp(${element.id})" class="bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm h-[24rem] cursor-pointer">
                    <div class="h-1.5 w-full  ${element.priority === "low" ? "bg-[#A855F7]" : "bg-[#00A96E]"} rounded-t-xl"></div>


                    <div class=" p-4  space-y-4">
                        <div class="flex items-center justify-between">
                            <img src=" ${element.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" alt="logo">
                            <button
                                class="bg-[#FEECEC] text-[#EF4444] font-medium px-2 py-1 rounded-2xl w-[5rem]">${element.priority}</button>
                        </div>

                        <div class="">
                            <h1 class="text-[#000000] font-semibold text-xl ">${element.title}</h1>
                            <p class="text-[#64748B] mt-2 line-clamp-2">${element.description}</p>
                        </div>

                        <div class="flex gap-2">
                            <button class="bg-[#FEECEC] text-[#EF4444] font-medium px-2 py-1 rounded-2xl w-[5rem]"><i
                                    class="ri-bug-line"></i> BUG</button>
                            <div class="flex items-center bg-[#FDE68A] font-medium px-2 py-1 rounded-2xl w-fit">
                               <img width="16px" src="./assets/Lifebuoy.png" alt="Lifebuoy">
                                <button class=" text-[#D97706] font-medium ml-1 py-1 rounded-2xl  ">Help Wanted</button>
                            </div>
                        </div>
                    </div>



                    <div class="p-4 border-t border-gray-200">
                        <p class="text-[#64748B]">#${element.id} ${element.author}</p>
                        <p class="text-[#64748B] mt-2">${formattedDate}</p>
                    </div>
                </div>
        `
        cartContainar.appendChild(div)
    });
}

function showPopUp(id) {
    const clickedCart = allCart.find(item => item.id === id)
    console.log(clickedCart)

    popUpDiv.classList.remove("hidden")

    // date formating
    const createdDate = clickedCart.createdAt
    const formattedDate = new Date(createdDate).toLocaleDateString('en-US')

    const div = document.createElement("div")
    div.className = 'fixed top-0 left-0 h-screen w-full z-10 flex items-center justify-center bg-[#1c1c1d66]'
    div.innerHTML = `
                    <div class="bg-[#FFFFFF] w-[35rem] shadow-2xl rounded-xl">

                <div class=" p-4  space-y-4">


                    <div class="space-y-4">
                        <h1 class="text-[#000000] font-semibold text-2xl ">${clickedCart.title}</h1>

                        <div class="flex gap-2">
                            <button class="bg-[#00A96E] text-white font-sm px-2 py-1 rounded-2xl w-[5rem]">
                            ${clickedCart.status}</button>
                            <div class="flex gap-2.5">
                                <div class="flex items-center gap-1">
                                    <div class="w-1 h-1 rounded-full bg-[#64748B]"></div>
                                    <p class="text-[#64748B] text-sm">Opened by ${clickedCart.author}</p>
                                </div>
                                <div class="flex items-center gap-1">
                                    <div class="w-1 h-1 rounded-full bg-[#64748B]"></div>
                                    <p class="text-[#64748B] text-sm">${formattedDate}</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="flex gap-2">
                        <button class="bg-[#FEECEC] text-[#EF4444] font-medium px-2 py-1 rounded-2xl w-[5rem]"><i
                                class="ri-bug-line"></i> BUG</button>
                        <div class="flex items-center bg-[#FDE68A] font-medium px-2 py-1 rounded-2xl w-fit">
                           <img width="16px" src="./assets/Lifebuoy.png" alt="Lifebuoy">
                                <button class=" text-[#D97706] font-medium ml-1 py-1 rounded-2xl  ">Help Wanted</button>
                        </div>
                    </div>

                    <p class="text-[#64748B] text-xl">${clickedCart.description}</p>

                    <div class="bg-[#F8FAFC]">
                        <div class="flex items-center justify-between w-[60%] p-4">
                            <div class="">
                                <h1 class="text-[#64748B]">Assignee:</h1>
                                <p class="text-[#1F2937] font-semibold text-xl mt-2">${clickedCart.author}</p>
                            </div>

                            <div class="">
                                <h1 class="text-[#64748B]">Priority:</h1>
                                <button class="bg-[#00A96E] text-white font-sm px-2 py-1 rounded-2xl w-[5rem] mt-2">
                                    ${clickedCart.priority}</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button
                            onclick = "closePopUp()"
                            class="bg-[#4A00FF] cursor-pointer text-white font-sm px-2 py-3 rounded-sm w-[5rem] mt-2">
                            Close</button>
                    </div>
                </div>

            </div>
    `
    popUpDiv.appendChild(div)
}

function closePopUp() {
    popUpDiv.classList.add("hidden")
}


function toggleFunc(id) {
    // console.log(id)
    allBtn.classList.remove('active-btn')
    openBtn.classList.remove('active-btn')
    closeBtn.classList.remove('active-btn')

    allBtn.classList.add('disabled-btm')
    openBtn.classList.add('disabled-btm')
    closeBtn.classList.add('disabled-btm')


    if (id === 1) {
        allBtn.classList.remove('disabled-btm')
        allBtn.classList.add('active-btn')
    } else if (id === 2) {
        openBtn.classList.remove('disabled-btm')
        openBtn.classList.add('active-btn')

    }
    else if (id === 3) {
        closeBtn.classList.remove('disabled-btm')
        closeBtn.classList.add('active-btn')

    }
}




/*
{
    "id": 48,
    "title": "Browser console shows warnings",
    "description": "Multiple deprecation warnings appearing in browser console. Need to update deprecated code.",
    "status": "open",
    "labels": [
        "bug"
    ],
    "priority": "low",
    "author": "console_carol",
    "assignee": "",
    "createdAt": "2024-02-09T14:20:00Z",
    "updatedAt": "2024-02-09T14:20:00Z"
}
*/










cartData()
