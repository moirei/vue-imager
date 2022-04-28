<template>
  <div class="demo-table">
    <div class="demo-table-container">
      <div class="demo-table-display col-12 col-md-8">
        <div class="demo-table-item-head">
          <slot name="heading"></slot>
        </div>
        <div class="demo-table-item-body demo-table-item-main-body">
          <slot name="top"></slot>
          <div class="pa-4" style="min-height: 400px">
            <slot></slot>
          </div>
        </div>
      </div>
      <div class="demo-table-options border-left col-12 col-md-4">
        <div class="demo-table-item-head">
          <slot name="options-top"></slot>
        </div>
        <div
          class="demo-table-item-body demo-table-item-options-body pa-4"
          style="min-height: 400px"
        >
          <slot name="options"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-table {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
/* .demo-table-item-main-body {
  background-color: rgba(0, 0, 0, 0.02);
} */
.demo-table-item-options-body {
  background-color: rgba(0, 0, 0, 0.02);
}
.demo-table-item-head {
  height: 40px;
  line-height: 40px;
  font-weight: 700;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 10px;
}
.demo-table-container {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}
.col-12 {
  padding: 0;
}
@media (min-width: 960px) {
  .border-left {
    border-left: 1px solid rgba(0, 0, 0, 0.2);
  }
}
@media (max-width: 960px) {
  .demo-table-options {
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
}
</style>
