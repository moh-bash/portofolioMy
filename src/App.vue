<template>
  <div class="banner h-screen
            bg-white dark:bg-gray-950
            text-gray-800   dark:text-white
            relative overflow-hidden overflow-y-auto"  ref="bannerRef">
    <!-- Navbar -->
    <Navbar/>
    <!-- Page Content -->
    <div class="flex justify-center">
      <router-view />
    </div>
  </div>
  <!-- Canvas -->
  <canvas ref="canvasRef" class="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Navbar from "./components/Navbar.vue";

const canvasRef = ref(null);
const bannerRef = ref(null);
let dots = [];
const arrayColors = ['#009966','oklch(90.5% 0.093 164.15)','oklch(69.6% 0.17 162.48)','oklch(59.6% 0.145 163.225)','#030712'];
let animationId;

onMounted(() => {
  setTimeout(() => {
    const canvas = canvasRef.value;
    const banner = bannerRef.value;
    const ctx = canvas.getContext('2d');
    const mouse = { x: null, y: null };
    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    }

    resizeCanvas();

    const createDots = () => {
      dots = [];
      for (let i = 0; i < 90; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 3,
          color: arrayColors[Math.floor(Math.random() * arrayColors.length)]
        });
      }
    }

    createDots();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 3);
        ctx.fill();

        if (mouse.x !== null && mouse.y !== null) {
          const dist = Math.hypot(mouse.x - dot.x, mouse.y - dot.y);
          if (dist < 130) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });
      animationId = requestAnimationFrame(animate);
    }

    animate();

    banner.addEventListener('mousemove', (e) => {
      mouse.x = e.pageX - banner.getBoundingClientRect().left;
      mouse.y = e.pageY - banner.getBoundingClientRect().top;
    });

    banner.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('resize', () => {
      resizeCanvas();
      createDots();
    });

    onBeforeUnmount(() => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    });
  }, 500);
});
</script>
