


<template>
    <section class="flex flex-wrap">
  <div class="w-full lg:w-1/2 p-8">
    <h2 class="text-4xl font-bold mb-4">Book your appointment with DentalPro in 2 minutes</h2>
    
    <p class="text-gray-600 mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie metus turpis. Vivamus mollis diam quis erat tincidunt.
    </p>

    <form>
      <div class="mb-6">
        <label class="block mb-2">Full Name</label>
        <input 
          type="text" 
          placeholder="Enter Full Name"
          class="w-full p-3 bg-gray-100 rounded"
        >
      </div>

      <div class="flex gap-4 mb-6">
        <div class="w-1/2">
          <label class="block mb-2">Phone Number</label>
          <input 
            type="tel" 
            placeholder="Enter Phone Number"
            class="w-full p-3 bg-gray-100 rounded"
          >
        </div>

        <div class="w-1/2">
          <label class="block mb-2">Treatment</label>
          <select class="w-full p-3 bg-gray-100 rounded">
            <option>Select Treatment</option>
          </select>
        </div>
      </div>

      <div class="mb-6">
        <label class="block mb-2">Message</label>
        <textarea 
          placeholder="Write message"
          class="w-full p-3 bg-gray-100 rounded h-32"
        ></textarea>
      </div>

      <button class="w-full bg-blue-500 text-white p-4 rounded font-bold hover:bg-blue-600">
        Book Appointment
      </button>
    </form>
  </div>

  <div class="w-full lg:w-1/2 bg-blue-500">
    <!-- Blue section with orange image -->
  </div>
</section>
</template>