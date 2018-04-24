import HelloWorld from './HelloWorld'
import "./main.css"

import { router } from 'san-router'

router.add({rule: '/', Component: HelloWorld, target: '#main'})

// start
router.start()