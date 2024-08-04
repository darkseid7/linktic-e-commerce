<script lang="ts">
	import { checkNetwork } from '../../../store';
	import { OnlineForm, OfflineForm } from '$lib/index';
</script>

{#if $checkNetwork}
	<OnlineForm />
{:else}
	<OfflineForm />
{/if}
