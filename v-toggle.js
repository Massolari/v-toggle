Vue.component('v-toggle', {
    template:`
    <div v-on:click="toggleValue" class="toggle btn" :class="toggleClass" style="width: 0px; height: 0px;" :disabled="disabled">
        <div class="toggle-group">
            <label class="btn btn-primary toggle-on" :style="styleCursor">{{ onText }}</label>
            <label class="btn btn-default active toggle-off" :style="styleCursor">{{ offText }}</label>
            <span class="toggle-handle btn btn-default" :style="styleCursor"></span>
        </div>
    </div>`,
    props: ["on", "off", "status", "onValue", "offValue", "disabled"],
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
            if (this.disabled) {
                return
            }
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
        styleCursor() {
            return {
                cursor: (this.disabled) ? "not-allowed" : "pointer"
            }
        },
        currentStatus() {
            return (this.status === (this.onValue || true))
        }
    }
})