import CMS from 'netlify-cms'
import * as NativeColorWidget from 'netlify-cms-widget-native-color'

import HomePagePreview from './preview-templates/HomePagePreview'
import HowPagePreview from './preview-templates/HowPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerWidget('native-color', NativeColorWidget.Control)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('how', HowPagePreview)
