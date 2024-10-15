<script>
	import { page } from '$app/stores';
</script>

<div
	class="space-y-4 min-h-[50.25rem] sm:min-h-[56rem] h-hero-calc hero:max-h-[32rem] hero:mt-24 mt-[1.875rem] 3xl:mt-0 pb-[3.75rem] flex flex-col justify-center w-full">
	<div class="space-y-4">
		<div>
			<a href="/" class="inline-block">
				<button class="flex justify-center items-center h-10 w-10 rounded-full bg-[#E8E8E8]">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#545454" class="size-5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
					</svg>
				</button>
			</a>
		</div>
		<div class="space-y-2 lg:w-[42rem]">
			<h1 class="text-[1.3925rem] leading-7 xs:leading-none xs:text-2xl lg:text-[1.75rem]">{$page.status}
				{$page.error.message} ─ We were unable to access this page on our server at the current time.
			</h1>
			<p class="text-[#7A7A7A] font-light leading-[1.1725rem] lg:leading-5 text-[0.885rem] lg:text-[0.925rem]">
				Oops, something went wrong. The page may have been moved, has an error or has been removed. We are very sorry about that.
			</p>
		</div>
	</div>
	<div class="select-none space-y-8 w-full">
		<div
			class="mt-4 relative w-full h-[52.25vw] sm:h-[15.75rem] lg:h-[18.25rem] xl:h-[22.25rem] 2xl:h-[24rem] transition-all delay-100 ease-in-out">
			<img src="/IMG_0252.JPEG"
					 class="grayscale w-full h-full rounded-xl lg:rounded-2xl 2xl:rounded-[1.25rem] object-cover" alt="">
		</div>
	</div>
</div>