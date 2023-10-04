interface ApplicablePatch {
  title: string;
  installStatus: string;
  uninstallable: string;
  severity: string;
  releaseDate: string;
  bulletins: string;
  sizeInBytes: string;
  kbArticles: string;
  cveIds: string;
  superseded: string;
  customField: string;
  osType: string;
  product: string;
  classification: string;
}

interface InstalledPatch {
  title: string;
  dateInstalled: string;
  installSource: string;
}
