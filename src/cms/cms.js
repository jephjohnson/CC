import CMS from 'netlify-cms'
import * as NativeColorWidget from 'netlify-cms-widget-native-color'

import HomePagePreview from './preview-templates/HomePagePreview'
import HowPagePreview from './preview-templates/HowPagePreview'
import WhoPagePreview from './preview-templates/WhoPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CareerPagePreview from './preview-templates/CareerPagePreview'

CMS.registerWidget('native-color', NativeColorWidget.Control)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('how', HowPagePreview)
CMS.registerPreviewTemplate('who', WhoPagePreview)
CMS.registerPreviewTemplate('career', CareerPagePreview)
