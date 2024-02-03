<script lang="ts">
	import Header from '$lib/FixedComponents/Header.svelte';
	import Footer from '$lib/FixedComponents/Footer.svelte';
	import Rectangle from './Rectangle.svelte';
	import Card from '$lib/FixedComponents/ListingCard.svelte';

	export let data;
	const landingPageEventsFromData = data.eventCard;
	const landingPageRequestsFromData = data.requestCard;
	// If data is an object, extract the array
	let dataArray = Array.isArray(landingPageEventsFromData)
		? landingPageEventsFromData
		: data.landingPageEvents;
	// Define the card structure
	//GUEST PRICE AND CURRENCY SHOULD BE ADDED
	let cardsApp = dataArray.map(
		(event: {
			name_of_event: any;
			location: any;
			name: any;
			ID: any;
			currency: any;
			guest_price: any;
		}) => ({
			imageSrc: `https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1679315482/cloud/277230.jpg`,
			title: event.name_of_event,
			subtitle: event.location,
			profileImageSrc: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1148433914.jpg',
			profileName: event.name /*+ ' ' + event.surname*/,
			ID: event.ID,
			currency: event.currency,
			budget: event.guest_price
		})
	); /*
	
  ];*/
</script>

<main>
	<div>
		<div class="pb-[4vw]">
			<section class="flex relative bg-whitebackground min-h-[55vW]">
				<div class="landing-page-circles bg-opacity-[15%] top-[100px] left-[17%] bg-[#ff0000]" />
				<div class="landing-page-circles bg-opacity-[15%] top-[150px] left-[50%] bg-[#00ff00]" />
				<div class="landing-page-circles bg-opacity-[15%] top-[250px] left-[70%] bg-[#0000ff]" />
				<div class="w-[25%]" />

				<div class="flex flex-col w-[50%] middle-column">
					<div class="h-[10vw]" />

					<div class="landing-page-rows h-[5vw] text-[2vw] font-bold">
						<p>
							You are more than a traveler!<br />
							Eat home-made meals by locals,<br />
							Share a great moment together!
						</p>
					</div>
					<div class="landing-page-rows h-[5vw] text-[0.8vw] font-medium mt-[1%]">
						<p>When not traveling, you receive the whole world coming to you!</p>
					</div>
					<div class="landing-page-rows h-[29vw]">
						<div class="w-[100%] pt-[56.25%] relative bg-complementary">
							<p
								class="absolute top-[50%] text-[1vw] left-[21vw] translate-x-[-50%] translate-y-[-50&] m-0"
							>
								Video goes here
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class="relative min-h-[100vh]">
				<div class="relative landing-page-rows h-[3vw] text-[2vw] font-medium top-[1vw]">
					<p>Here we connect people.</p>
				</div>

				<div class="relative w-[100%] top-[3vw]">
					<div class="flex">
						<div class="relative flex flex-col items-center left-[10%]">
							<div class="relative top-0 flex items-center">
								<img
									src="/ReviewImage.jpg"
									alt=""
									class="w-[4vw] h-[4vw] object-cover rounded-full mr-[0.5vw]"
								/>
								<div class="text-textdark ml-[2vw]">
									<div class="font-bold text-[1vw]">
										<span>Tomos Fox</span>
									</div>
									<div>
										<span class="text-[0.7vw]">Madison, USA</span>
									</div>
								</div>
							</div>

							<div class="relative text-[0.8vw] w-[20vw] top-[2vw]">
								<span
									>Hmm… I am going to go to Spain in two weeks but I am not sure what to do there.
									Maybe I need to try something very authentic to dive deeper into the culture? Oh,
									YES!</span
								>
							</div>
						</div>

						<div class="absolute right-[15%]">
							<div class="absolute top-0 right-[50vw]">
								<div class="absolute top-0">
									<div class="absolute left-[38vw] top-[2vw]">
										<svg width="6vw" height="2vw" viewBox="0 0 128 57" fill="none">
											<path
												d="M126.418 56.0739C127.197 56.1759 127.821 55.5546 127.809 54.6862L127.629 40.5356C127.617 39.6672 126.976 38.8806 126.197 38.7786C125.417 38.6766 124.794 39.2979 124.805 40.1663L124.966 52.7446L113.671 51.2673C112.891 51.1653 112.268 51.7866 112.279 52.6549C112.29 53.5233 112.931 54.3099 113.711 54.4119L126.418 56.0739ZM0.998961 2.50127C1.09152 4.08098 1.09156 4.08098 1.09193 4.08101C1.09251 4.08105 1.09322 4.0811 1.09436 4.08119C1.09664 4.08136 1.10027 4.08163 1.10522 4.082C1.11513 4.08275 1.13036 4.08391 1.15084 4.0855C1.19179 4.08867 1.25376 4.09354 1.3362 4.10025C1.50108 4.11367 1.74785 4.1344 2.07227 4.16344C2.72111 4.22152 3.68043 4.31283 4.91621 4.44529C7.38791 4.71021 10.9647 5.13964 15.3744 5.79685C24.1962 7.11161 36.3398 9.33623 49.6312 12.9745C76.3108 20.2776 107.235 33.1786 125.413 55.4828L127.382 53.5204C108.476 30.3239 76.7008 17.2248 49.9521 9.90288C36.5294 6.22867 24.2766 3.98458 15.3806 2.65875C10.9314 1.99566 7.31894 1.56183 4.81608 1.29357C3.56459 1.15943 2.59032 1.06666 1.92739 1.00732C1.59591 0.977643 1.34225 0.956324 1.17067 0.942364C1.08488 0.935385 1.01961 0.930245 0.975388 0.926821C0.953277 0.925109 0.936428 0.923826 0.924908 0.922956C0.919147 0.922522 0.91472 0.922189 0.911632 0.92196C0.910089 0.921844 0.90878 0.921748 0.908008 0.92169C0.907036 0.921618 0.9064 0.921571 0.998961 2.50127Z"
												fill="#0C0C0C"
											/>
										</svg>
									</div>

									<div class="absolute left-[23vw]">
										<Rectangle text="Get request confirmed" size={100} color="#E8F7E9" />
									</div>

									<div class="absolute left-[11.5vw]">
										<Rectangle text="Send a request" size={100} color="#E8F1F7" />
									</div>

									<div class="absolute">
										<Rectangle text="Check offers" size={100} color="#FCEAEB" />
									</div>
								</div>

								<div class="absolute top-[7vw]">
									<div class="absolute left-[38vw]">
										<svg width="6vw" height="2vw" viewBox="0 0 128 56" fill="none">
											<path
												d="M126.418 0.531595C127.197 0.429603 127.821 1.05086 127.809 1.91922L127.629 16.0699C127.617 16.9382 126.976 17.7248 126.197 17.8268C125.417 17.9288 124.794 17.3076 124.805 16.4392L124.966 3.86085L113.671 5.33817C112.891 5.44015 112.268 4.81889 112.279 3.95054C112.29 3.08218 112.931 2.29556 113.711 2.19358L126.418 0.531595ZM0.998961 54.1042C1.09152 52.5245 1.09156 52.5245 1.09193 52.5245C1.09251 52.5244 1.09322 52.5244 1.09436 52.5243C1.09664 52.5241 1.10027 52.5238 1.10522 52.5235C1.11513 52.5227 1.13036 52.5216 1.15084 52.52C1.19179 52.5168 1.25376 52.5119 1.3362 52.5052C1.50108 52.4918 1.74785 52.4711 2.07227 52.442C2.72111 52.3839 3.68043 52.2926 4.91621 52.1602C7.38791 51.8953 10.9647 51.4658 15.3744 50.8086C24.1962 49.4939 36.3398 47.2692 49.6312 43.6309C76.3108 36.3279 107.235 23.4268 125.413 1.12268L127.382 3.08509C108.476 26.2815 76.7008 39.3806 49.9521 46.7026C36.5294 50.3768 24.2766 52.6209 15.3806 53.9467C10.9314 54.6098 7.31894 55.0436 4.81608 55.3119C3.56459 55.446 2.59032 55.5388 1.92739 55.5982C1.59591 55.6278 1.34225 55.6491 1.17067 55.6631C1.08488 55.6701 1.01961 55.6752 0.975388 55.6786C0.953277 55.6804 0.936428 55.6816 0.924908 55.6825C0.919147 55.6829 0.91472 55.6833 0.911632 55.6835C0.910089 55.6836 0.90878 55.6837 0.908008 55.6838C0.907036 55.6839 0.9064 55.6839 0.998961 54.1042Z"
												fill="#0C0C0C"
											/>
										</svg>
									</div>

									<div class="absolute left-[23vw]">
										<Rectangle text="Accept" size={100} color="#E8F7E9" />
									</div>

									<div class="absolute left-[11.5vw]">
										<Rectangle text="Receive an offer" size={100} color="#E8F1F7" />
									</div>

									<div class="absolute">
										<Rectangle text="Publish request" size={100} color="#FCEAEB" />
									</div>
								</div>

								<div class="absolute flex items-center left-[45vw] top-[4vw]">
									<div
										class="text-textdark bg-[#F3E8F7] w-[12vw] h-[4vw] rounded-full flex justify-center items-center"
									>
										<div class="flex justify-center items-center h-full">
											<span class="text-[1.3vw]">🎉</span>
											<span class="text-[0.8vw]">Meet, Eat and Enjoy</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							class="absolute overflow-x-auto left-[10%] right-[10%] p-[0.5vw] top-[15vw] border-t-[0.1vw] border-complementary"
						>
							<div class="flex space-x-[6vw]">
								{#each cardsApp as card}
									<div class="w-[11vw]">
										<Card
											ID_event={card.ID}
											imageSrc={card.imageSrc}
											title={card.title}
											subtitle={card.subtitle}
											profileImageSrc={card.profileImageSrc}
											profileName={card.profileName}
											currency={card.currency}
											budget={card.budget}
										/>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</main>
