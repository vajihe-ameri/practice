<template>
  <div>
    <NavBar />
    <div class="pa-5 card-back">
      <div>
        <v-text-field
          rounded
          filled
          autocomplete="off"
          label="جست و جو"
        />
      </div>
      <div class="mb-5">
        <nuxt-link to="/increase" class="text-center">
          <h4>کیف پول</h4>
        </nuxt-link>
      </div>
      <div class="row ma-0">
        <template v-for="item in wallets">
          <div class="col-12 col-sm-6 col-md-3">
            <v-card color="white">
              <v-card-text>
                <div class="d-flex align-items-center mb-3">
                  <v-img
                    src="appointment-vector-01.svg"
                    max-width="50"
                  />
                  <div class="mr-3">
                    <h6>{{ item.name }}</h6>
                    <p>
                      <v-icon small>
                        mdi-map-marker-outline
                      </v-icon>
                      {{ item.city }}
                    </p>
                  </div>
                  <v-spacer />
                  <v-btn
                    x-small
                    :color="item.status === 'لغو شده' ? 'red' : 'green'"
                    class="white--text"
                    elevation="0"
                  >
                    {{ item.status }}
                  </v-btn>
                </div>
                <div class="d-flex align-items-center">
                  <v-icon small>
                    mdi-calendar
                  </v-icon>
                  <h6 class="mr-1">تاریخ اخذ شیفت:</h6>
                  <p class="mx-2 mb-2">{{ item.get_shift_date }}</p>
                </div>
                <div class="d-flex align-items-center">
                  <v-icon small>
                    mdi-calendar
                  </v-icon>
                  <h6 class="mr-1">تاریخ شیفت:</h6>
                  <p class="mx-2 mb-2">{{ item.shift_date }}</p>
                </div>
                <div class="d-flex align-items-center">
                  <v-icon small>
                    mdi-history
                  </v-icon>
                  <h6 class="mr-1">ساعت شیفت:</h6>
                  <p class="mx-2 mb-2">{{ item.shift_hour }}</p>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Resource from '@/api/crud/resource'

export default {
  name: "index",
  layout: 'default',
  data() {
    return {
      walletsLoading: false,
      wallets: []
    }
  },
  created() {
    this.getWallets()
  },
  methods: {
    async getWallets() {
      if (this.walletsLoading) return
      this.walletsLoading = true
      await new Resource('shifts/list')
        .list()
        .then((response) => {
          this.wallets = []
          this.wallets = response.data
          this.$store.dispatch('user/saveWallet', this.wallets)
        })
        .finally(() => {
          this.walletsLoading = false
        })
    },
  }
}
</script>
