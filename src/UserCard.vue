<script>
</script>
<template>
<div class="card">
    <div class="card-header">
        <slot name="header"></slot>
    </div>
    <div class="card-body">
        <slot name="content"></slot>
    </div>
    <div class="card-footer">
        <slot name="footer"></slot>
    </div>
</div>
</template>
<style>
.card {
    border: .5px solid;

    .card-header, .card-body, .card-footer{
        margin: 0;
        padding: 15px;
    }
}
</style>