// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true }
  },
  computedFields: {
    id: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./articles/",
  documentTypes: [Article]
});
export {
  Article,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-5YH2UMQE.mjs.map
