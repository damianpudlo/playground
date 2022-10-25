import {
    getErrorCause,
    isRecoverableError
    // @ts-ignore
} from 'commercetools-adyen-integration-notification/src/utils/error-utils'

// @ts-ignore
import upperCase from 'lodash/upperCase'

const t = getErrorCause({});
const g = isRecoverableError({});

console.log('Thanks for using TPG!', upperCase("some test "), t, g)

console.log('Thanks for using TPG!')
