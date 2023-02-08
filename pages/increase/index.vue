<template>
  <div>
    <NavBar />
    <div class="pa-5 card-back">
      <div class="col-12 col-md-3">
        <v-card color="white">
          <v-card-text class="d-flex justify-content-around">
            <div class="text-center">
              <p>موجودی کیف پول</p>
              <div>
                <h5>3,845,425</h5>
                <p>تومان</p>
              </div>
              <v-btn
                color="primary"
                class="white--text py-8"
                @click="dialog = true"
              >
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
              <p class="mt-3 small">افزایش موجودی</p>
            </div>
            <div style="border-left: solid 1px lightgray; height: 80px"></div>
            <div class="text-center">
              <p>موجودی کیف پول</p>
              <div>
                <h5>94,500</h5>
                <p>تومان</p>
              </div>
              <v-btn
                color="primary"
                class="white--text py-8"
              >
                <v-icon large>mdi-cash-multiple</v-icon>
              </v-btn>
              <p class="mt-3 small">درخواست استرداد</p>
            </div>
          </v-card-text>
        </v-card>
      </div>
      <div class="col-12 col-md-3">
        <v-card color="white">
          <v-card-text class="d-flex justify-content-around">
            <div>
              <v-btn
                small
                color="blue light-3"
                class="py-6"
              >
                <v-icon class="px-0" color="primary">mdi-cash-multiple</v-icon>
              </v-btn>
            </div>
            <div class="mr-2">
              <h6 class="small">وضعیت درخواست استرداد</h6>
              <p class="small primary--text">برای پیشگیری وضعیت درخواست استرداد کلیک نمایید</p>
            </div>
            <div>
              <v-btn
                small
                outlined
                color="primary"
              >
                لغو شده
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title>
          <h6>افزایش اعتبار</h6>
          <v-spacer />
          <v-btn small fab icon @click="dialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div class="my-5">
            <v-text-field
              v-model="amount"
              rounded
              filled
              autocomplete="off"
              label="مبلغ درخواستی خود را وارد کنید."
            />
          </div>
          <div>
            <v-btn
              color="info"
              width="100%"
              @click="saveAmount"
            >
              افزایش
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Resource from "~/api/crud/resource";

export default {
  name: "index",
  layout: 'default',
  data() {
    return {
      dialog: false,
      amount: this.$store.getters.inventoryIncrease,
    }
  },
  created() {
    this.amount = this.$store.getters.inventoryIncrease
  },
  methods: {
    saveAmount() {
      this.$store.dispatch('user/saveAmount', this.amount)
    },
  }
}
</script>
