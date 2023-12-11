<script setup>
import { ref } from "vue";
import { animations } from "@/data/animations";
import CodeEditor from "simple-code-editor";

const showModal = (index) => {
  const modalId = "my_modal_" + index;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const closeModal = (index) => {
  const modalId = "my_modal_" + index;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.close();
  }
};

const isMouseOver = ref(Array(animations.length).fill(false));

const handleMouseEnter = (index) => {
  isMouseOver.value[index] = true;
};

const handleMouseLeave = (index) => {
  isMouseOver.value[index] = false;
};

const selectedLanguage = ref("Tailwind");
const animation = {
  codeTailwind: "... tu código Tailwind aquí ...",
  codeCSS: "... tu código CSS aquí ...",
};

const showTailwind = () => {
  selectedLanguage.value = "Tailwind";
};

const showCSS = () => {
  selectedLanguage.value = "CSS";
};
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <div
      class="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-10 md:px-20 px-8 py-4"
    >
      <div v-for="(animation, index) in animations" :key="index">
        <div
          class="h-60 bg-zinc-800 rounded-xl flex items-center justify-center"
        >
          <div
            class="w-40 h-40 md:w-1/2 md:h-1/2 bg-zinc-900 rounded-xl"
            :class="{
              ['animate-' + animation.slug]: isMouseOver[index],
            }"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave(index)"
          ></div>
        </div>
        <div class="mt-3">
          <button @click="showModal(index)">{{ animation.name }}</button>
          <dialog
            :id="'my_modal_' + index"
            class="modal web modal-bottom sm:modal-middle"
          >
            <div class="modal-box bg-zinc-800 scrollbar-thin md:100px">
              <form method="dialog">
                <button
                  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <h3 class="font-bold text-lg mb-4">
                {{ animation.name }}
              </h3>
              <div
                class="absolute w-1/4 flex gap-5 px-4 py-2 rounded-t-md z-10"
              >
                <button
                  :class="{ 'text-blue-400': selectedLanguage === 'Tailwind' }"
                  @click="showTailwind"
                >
                  Tailwind
                </button>
                <button
                  :class="{ 'text-blue-400': selectedLanguage === 'CSS' }"
                  @click="showCSS"
                >
                  CSS
                </button>
              </div>
              <CodeEditor
                :read-only="true"
                v-if="selectedLanguage === 'Tailwind'"
                :value="animation.codeTailwind"
                style="width: 100%; height: auto"
                :wrap="true"
                theme="vs2015"
                :display-language="false"
              />

              <CodeEditor
                :read-only="true"
                v-if="selectedLanguage === 'CSS'"
                :value="animation.codeCSS"
                style="width: 100%; height: auto"
                :wrap="true"
                theme="vs2015"
                :display-language="false"
              />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
