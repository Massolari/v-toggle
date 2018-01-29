Vue.component('v-toggle', {
    template:`
    <div v-on:click="toggleValue" class="toggle btn" :class="toggleClass" style="width: 0px; height: 0px;">
        <div class="toggle-group">
            <label class="btn btn-primary toggle-on">{{ onText }}</label>
            <label class="btn btn-default active toggle-off">{{ offText }}</label>
            <span class="toggle-handle btn btn-default"></span>
        </div>
    </div>`,
    props: ['on', 'off', 'status', 'onValue', 'offValue'],
    data() {
        return {
            onText: this.on || "Sim",
            offText: this.off || "Não",
            onVal: this.onValue || true,
            offVal: this.offValue || false
        }
    },
    methods: {
        toggleValue() {
            this.$emit('change', (!this.currentStatus) ? this.onVal : this.offVal)
        }
    },
    computed: {
        toggleClass() {
            return {
                'btn-primary': this.currentStatus,
                'btn-default off': !this.currentStatus
            }
        },
        currentStatus() {
            return (this.status === (this.onValue || true))
        }
    }
})