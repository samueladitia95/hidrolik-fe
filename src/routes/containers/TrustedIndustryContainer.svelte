<script lang="ts">
	const industries = [
		{
			image:
				'https://s3-alpha-sig.figma.com/img/b58f/5afa/0771bae98f096a1613d3bb16ea98cac0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaP0bqS1pia-cOQJJoNytvmnHdjjvhRBn0Uum6A4e07QT9UqhFxvhi2csExo-hnmqaq9ZP6E9m~VDABzPE~pXa9P3cpSXyETmlZr6GIyfDFPwwoP2E5l7u5eEA1FCl30EaSUqNB7pPF7auGIobZs9XYXAp1vY92FZfFxNbv39z11ZAkEUjDXBlItA9DKQYc1j0t82jMy9vY0E5zPYfVZp3gu85cy646M~g4NBkNSiAffgvoXsPYSWnKqXq~SapG880fnNqIX7Dll2AeoSXe3BmdUKSXoisOKCFKPuCDPr34PPoPxMIXVd-Mc5pGEqL1Mz1mYW3sWN1A8a0BOFffwEA__'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/63f7/578e/8ba57d04053b5e656d2fb9bd59195ef9?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W5ujUgc4vz3QZLQ8LNR5W0pBWvYAI6y-ouXrtRGLGGYSK3ewSk5Q~9gn43GjmsknwdiTfGw8ddfdrvM02zFs0LrkCI0qoZAXWOFoikOi65TvGtjyIl3mEDRmT5hqeF3e9uMVnkGezmsRzq7pJTWrG5AR2tRl-1ui6XIYhflKH7uHzT08GkoFczwifRYfd5mDgXFnSI5n9DDfb4ZlvbCfOltMb8V2jiddyBO4gqaGTBHDZVGY2Z6qTcuEs7l7TGiR9tWW7dM~7pPPJLfeGLI~FN4UtODdiNQBobeCutXemNMYl9oGmy9VxiIBPfSxDyOmC~hdQ5XGZ6yZ0sssBL9kIA__'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/b58f/5afa/0771bae98f096a1613d3bb16ea98cac0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaP0bqS1pia-cOQJJoNytvmnHdjjvhRBn0Uum6A4e07QT9UqhFxvhi2csExo-hnmqaq9ZP6E9m~VDABzPE~pXa9P3cpSXyETmlZr6GIyfDFPwwoP2E5l7u5eEA1FCl30EaSUqNB7pPF7auGIobZs9XYXAp1vY92FZfFxNbv39z11ZAkEUjDXBlItA9DKQYc1j0t82jMy9vY0E5zPYfVZp3gu85cy646M~g4NBkNSiAffgvoXsPYSWnKqXq~SapG880fnNqIX7Dll2AeoSXe3BmdUKSXoisOKCFKPuCDPr34PPoPxMIXVd-Mc5pGEqL1Mz1mYW3sWN1A8a0BOFffwEA__'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/b58f/5afa/0771bae98f096a1613d3bb16ea98cac0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaP0bqS1pia-cOQJJoNytvmnHdjjvhRBn0Uum6A4e07QT9UqhFxvhi2csExo-hnmqaq9ZP6E9m~VDABzPE~pXa9P3cpSXyETmlZr6GIyfDFPwwoP2E5l7u5eEA1FCl30EaSUqNB7pPF7auGIobZs9XYXAp1vY92FZfFxNbv39z11ZAkEUjDXBlItA9DKQYc1j0t82jMy9vY0E5zPYfVZp3gu85cy646M~g4NBkNSiAffgvoXsPYSWnKqXq~SapG880fnNqIX7Dll2AeoSXe3BmdUKSXoisOKCFKPuCDPr34PPoPxMIXVd-Mc5pGEqL1Mz1mYW3sWN1A8a0BOFffwEA__'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/b58f/5afa/0771bae98f096a1613d3bb16ea98cac0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaP0bqS1pia-cOQJJoNytvmnHdjjvhRBn0Uum6A4e07QT9UqhFxvhi2csExo-hnmqaq9ZP6E9m~VDABzPE~pXa9P3cpSXyETmlZr6GIyfDFPwwoP2E5l7u5eEA1FCl30EaSUqNB7pPF7auGIobZs9XYXAp1vY92FZfFxNbv39z11ZAkEUjDXBlItA9DKQYc1j0t82jMy9vY0E5zPYfVZp3gu85cy646M~g4NBkNSiAffgvoXsPYSWnKqXq~SapG880fnNqIX7Dll2AeoSXe3BmdUKSXoisOKCFKPuCDPr34PPoPxMIXVd-Mc5pGEqL1Mz1mYW3sWN1A8a0BOFffwEA__'
		},
		{
			image:
				'https://s3-alpha-sig.figma.com/img/b58f/5afa/0771bae98f096a1613d3bb16ea98cac0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KaP0bqS1pia-cOQJJoNytvmnHdjjvhRBn0Uum6A4e07QT9UqhFxvhi2csExo-hnmqaq9ZP6E9m~VDABzPE~pXa9P3cpSXyETmlZr6GIyfDFPwwoP2E5l7u5eEA1FCl30EaSUqNB7pPF7auGIobZs9XYXAp1vY92FZfFxNbv39z11ZAkEUjDXBlItA9DKQYc1j0t82jMy9vY0E5zPYfVZp3gu85cy646M~g4NBkNSiAffgvoXsPYSWnKqXq~SapG880fnNqIX7Dll2AeoSXe3BmdUKSXoisOKCFKPuCDPr34PPoPxMIXVd-Mc5pGEqL1Mz1mYW3sWN1A8a0BOFffwEA__'
		}
	];
</script>

<div class="bg-white py-20">
	<div class="container flex flex-col gap-6">
		<div class="font-bold text-center text-base/relaxed">
			Trusted by industry leaders for superior quality and reliability
		</div>
		<div class="flex flex-wrap justify-center gap-6">
			{#each industries as industry}
				<img src={industry.image} alt="industry" class="w-36 h-14" />
			{/each}
		</div>
	</div>
</div>
