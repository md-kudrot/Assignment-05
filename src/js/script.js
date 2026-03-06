const cartContainar = document.getElementById("cartContainar")

async function cartData() {
    const api = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const dataObj = await api.json()
    // console.log(data)
    renderCartData(dataObj.data)
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
function renderCartData(dataArr) {
    // console.log(div)
    dataArr.forEach(element => {

        // date formating
        const createdDate = element.createdAt
        const formattedDate = new Date(createdDate).toLocaleDateString('en-US')


        const div = document.createElement("div")
        div.className = 'bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm'
        // console.log(element)
        div.innerHTML = `
        <div class="bg-[#FFFFFF]  shadow-2xl rounded-t-xl rounded-b-sm h-[24rem]">
                    <div class="h-1.5 w-full  ${element.priority === "low" ? "bg-[#A855F7]" :"bg-[#00A96E]" } rounded-t-xl"></div>


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
                                <img width="18px" src="./assets/Lifebuoy.png" alt="Lifebuoy">
                                <button class=" text-[#D97706] font-medium px-2 py-1 rounded-2xl ">Help Wanted</button>
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












cartData()
