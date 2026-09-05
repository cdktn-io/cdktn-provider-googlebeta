# `googleBiglakeIcebergCatalog` Submodule <a name="`googleBiglakeIcebergCatalog` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergCatalog <a name="GoogleBiglakeIcebergCatalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog google_biglake_iceberg_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_type: str,
  name: str,
  credential_mode: str = None,
  default_location: str = None,
  deletion_policy: str = None,
  description: str = None,
  federated_catalog_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptions = None,
  id: str = None,
  primary_location: str = None,
  project: str = None,
  restricted_locations_config: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig = None,
  timeouts: GoogleBiglakeIcebergCatalogTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.catalogType">catalog_type</a></code> | <code>str</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.credentialMode">credential_mode</a></code> | <code>str</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.defaultLocation">default_location</a></code> | <code>str</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.description">description</a></code> | <code>str</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.federatedCatalogOptions">federated_catalog_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.primaryLocation">primary_location</a></code> | <code>str</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.restrictedLocationsConfig">restricted_locations_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.catalogType"></a>

- *Type:* str

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#catalog_type GoogleBiglakeIcebergCatalog#catalog_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.name"></a>

- *Type:* str

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#name GoogleBiglakeIcebergCatalog#name}

---

##### `credential_mode`<sup>Optional</sup> <a name="credential_mode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.credentialMode"></a>

- *Type:* str

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#credential_mode GoogleBiglakeIcebergCatalog#credential_mode}

---

##### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.defaultLocation"></a>

- *Type:* str

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#default_location GoogleBiglakeIcebergCatalog#default_location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#deletion_policy GoogleBiglakeIcebergCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.description"></a>

- *Type:* str

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#description GoogleBiglakeIcebergCatalog#description}

---

##### `federated_catalog_options`<sup>Optional</sup> <a name="federated_catalog_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.federatedCatalogOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#federated_catalog_options GoogleBiglakeIcebergCatalog#federated_catalog_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primary_location`<sup>Optional</sup> <a name="primary_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.primaryLocation"></a>

- *Type:* str

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#primary_location GoogleBiglakeIcebergCatalog#primary_location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}.

---

##### `restricted_locations_config`<sup>Optional</sup> <a name="restricted_locations_config" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.restrictedLocationsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#restricted_locations_config GoogleBiglakeIcebergCatalog#restricted_locations_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#timeouts GoogleBiglakeIcebergCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions">put_federated_catalog_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig">put_restricted_locations_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetCredentialMode">reset_credential_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDefaultLocation">reset_default_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetFederatedCatalogOptions">reset_federated_catalog_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetPrimaryLocation">reset_primary_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetRestrictedLocationsConfig">reset_restricted_locations_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_federated_catalog_options` <a name="put_federated_catalog_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions"></a>

```python
def put_federated_catalog_options(
  glue_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo = None,
  refresh_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions = None,
  secret_name: str = None,
  service_directory_name: str = None,
  unity_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo = None
) -> None
```

###### `glue_catalog_info`<sup>Optional</sup> <a name="glue_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.glueCatalogInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

glue_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#glue_catalog_info GoogleBiglakeIcebergCatalog#glue_catalog_info}

---

###### `refresh_options`<sup>Optional</sup> <a name="refresh_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.refreshOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

refresh_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_options GoogleBiglakeIcebergCatalog#refresh_options}

---

###### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.secretName"></a>

- *Type:* str

The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#secret_name GoogleBiglakeIcebergCatalog#secret_name}

---

###### `service_directory_name`<sup>Optional</sup> <a name="service_directory_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.serviceDirectoryName"></a>

- *Type:* str

The Service Directory service name for private network connectivity through Cross-Cloud Interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#service_directory_name GoogleBiglakeIcebergCatalog#service_directory_name}

---

###### `unity_catalog_info`<sup>Optional</sup> <a name="unity_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.unityCatalogInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

unity_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#unity_catalog_info GoogleBiglakeIcebergCatalog#unity_catalog_info}

---

##### `put_restricted_locations_config` <a name="put_restricted_locations_config" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig"></a>

```python
def put_restricted_locations_config(
  restricted_locations: typing.List[str] = None
) -> None
```

###### `restricted_locations`<sup>Optional</sup> <a name="restricted_locations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig.parameter.restrictedLocations"></a>

- *Type:* typing.List[str]

A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#restricted_locations GoogleBiglakeIcebergCatalog#restricted_locations}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}.

---

##### `reset_credential_mode` <a name="reset_credential_mode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetCredentialMode"></a>

```python
def reset_credential_mode() -> None
```

##### `reset_default_location` <a name="reset_default_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDefaultLocation"></a>

```python
def reset_default_location() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_federated_catalog_options` <a name="reset_federated_catalog_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetFederatedCatalogOptions"></a>

```python
def reset_federated_catalog_options() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_primary_location` <a name="reset_primary_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetPrimaryLocation"></a>

```python
def reset_primary_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_restricted_locations_config` <a name="reset_restricted_locations_config" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetRestrictedLocationsConfig"></a>

```python
def reset_restricted_locations_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GoogleBiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBiglakeIcebergCatalog to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBiglakeIcebergCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccount">biglake_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccountId">biglake_service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptions">federated_catalog_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList">GoogleBiglakeIcebergCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfig">restricted_locations_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.storageRegions">storage_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference">GoogleBiglakeIcebergCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogTypeInput">catalog_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialModeInput">credential_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocationInput">default_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptionsInput">federated_catalog_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocationInput">primary_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfigInput">restricted_locations_config_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogType">catalog_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialMode">credential_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocation">default_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocation">primary_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `biglake_service_account`<sup>Required</sup> <a name="biglake_service_account" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccount"></a>

```python
biglake_service_account: str
```

- *Type:* str

---

##### `biglake_service_account_id`<sup>Required</sup> <a name="biglake_service_account_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccountId"></a>

```python
biglake_service_account_id: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `federated_catalog_options`<sup>Required</sup> <a name="federated_catalog_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptions"></a>

```python
federated_catalog_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a>

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.replicas"></a>

```python
replicas: GoogleBiglakeIcebergCatalogReplicasList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList">GoogleBiglakeIcebergCatalogReplicasList</a>

---

##### `restricted_locations_config`<sup>Required</sup> <a name="restricted_locations_config" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfig"></a>

```python
restricted_locations_config: GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a>

---

##### `storage_regions`<sup>Required</sup> <a name="storage_regions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.storageRegions"></a>

```python
storage_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeouts"></a>

```python
timeouts: GoogleBiglakeIcebergCatalogTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference">GoogleBiglakeIcebergCatalogTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `catalog_type_input`<sup>Optional</sup> <a name="catalog_type_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogTypeInput"></a>

```python
catalog_type_input: str
```

- *Type:* str

---

##### `credential_mode_input`<sup>Optional</sup> <a name="credential_mode_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialModeInput"></a>

```python
credential_mode_input: str
```

- *Type:* str

---

##### `default_location_input`<sup>Optional</sup> <a name="default_location_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocationInput"></a>

```python
default_location_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `federated_catalog_options_input`<sup>Optional</sup> <a name="federated_catalog_options_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptionsInput"></a>

```python
federated_catalog_options_input: GoogleBiglakeIcebergCatalogFederatedCatalogOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_location_input`<sup>Optional</sup> <a name="primary_location_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocationInput"></a>

```python
primary_location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `restricted_locations_config_input`<sup>Optional</sup> <a name="restricted_locations_config_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfigInput"></a>

```python
restricted_locations_config_input: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | GoogleBiglakeIcebergCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

---

##### `credential_mode`<sup>Required</sup> <a name="credential_mode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialMode"></a>

```python
credential_mode: str
```

- *Type:* str

---

##### `default_location`<sup>Required</sup> <a name="default_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_location`<sup>Required</sup> <a name="primary_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocation"></a>

```python
primary_location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergCatalogConfig <a name="GoogleBiglakeIcebergCatalogConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_type: str,
  name: str,
  credential_mode: str = None,
  default_location: str = None,
  deletion_policy: str = None,
  description: str = None,
  federated_catalog_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptions = None,
  id: str = None,
  primary_location: str = None,
  project: str = None,
  restricted_locations_config: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig = None,
  timeouts: GoogleBiglakeIcebergCatalogTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.catalogType">catalog_type</a></code> | <code>str</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.name">name</a></code> | <code>str</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.credentialMode">credential_mode</a></code> | <code>str</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.defaultLocation">default_location</a></code> | <code>str</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.description">description</a></code> | <code>str</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.federatedCatalogOptions">federated_catalog_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.primaryLocation">primary_location</a></code> | <code>str</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.restrictedLocationsConfig">restricted_locations_config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_type`<sup>Required</sup> <a name="catalog_type" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.catalogType"></a>

```python
catalog_type: str
```

- *Type:* str

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#catalog_type GoogleBiglakeIcebergCatalog#catalog_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#name GoogleBiglakeIcebergCatalog#name}

---

##### `credential_mode`<sup>Optional</sup> <a name="credential_mode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.credentialMode"></a>

```python
credential_mode: str
```

- *Type:* str

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#credential_mode GoogleBiglakeIcebergCatalog#credential_mode}

---

##### `default_location`<sup>Optional</sup> <a name="default_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.defaultLocation"></a>

```python
default_location: str
```

- *Type:* str

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#default_location GoogleBiglakeIcebergCatalog#default_location}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#deletion_policy GoogleBiglakeIcebergCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#description GoogleBiglakeIcebergCatalog#description}

---

##### `federated_catalog_options`<sup>Optional</sup> <a name="federated_catalog_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.federatedCatalogOptions"></a>

```python
federated_catalog_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#federated_catalog_options GoogleBiglakeIcebergCatalog#federated_catalog_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primary_location`<sup>Optional</sup> <a name="primary_location" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.primaryLocation"></a>

```python
primary_location: str
```

- *Type:* str

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#primary_location GoogleBiglakeIcebergCatalog#primary_location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}.

---

##### `restricted_locations_config`<sup>Optional</sup> <a name="restricted_locations_config" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.restrictedLocationsConfig"></a>

```python
restricted_locations_config: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#restricted_locations_config GoogleBiglakeIcebergCatalog#restricted_locations_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.timeouts"></a>

```python
timeouts: GoogleBiglakeIcebergCatalogTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#timeouts GoogleBiglakeIcebergCatalog#timeouts}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptions <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions(
  glue_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo = None,
  refresh_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions = None,
  secret_name: str = None,
  service_directory_name: str = None,
  unity_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo">glue_catalog_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | glue_catalog_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions">refresh_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | refresh_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.secretName">secret_name</a></code> | <code>str</code> | The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName">service_directory_name</a></code> | <code>str</code> | The Service Directory service name for private network connectivity through Cross-Cloud Interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo">unity_catalog_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | unity_catalog_info block. |

---

##### `glue_catalog_info`<sup>Optional</sup> <a name="glue_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo"></a>

```python
glue_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

glue_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#glue_catalog_info GoogleBiglakeIcebergCatalog#glue_catalog_info}

---

##### `refresh_options`<sup>Optional</sup> <a name="refresh_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions"></a>

```python
refresh_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

refresh_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_options GoogleBiglakeIcebergCatalog#refresh_options}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#secret_name GoogleBiglakeIcebergCatalog#secret_name}

---

##### `service_directory_name`<sup>Optional</sup> <a name="service_directory_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName"></a>

```python
service_directory_name: str
```

- *Type:* str

The Service Directory service name for private network connectivity through Cross-Cloud Interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#service_directory_name GoogleBiglakeIcebergCatalog#service_directory_name}

---

##### `unity_catalog_info`<sup>Optional</sup> <a name="unity_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo"></a>

```python
unity_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

unity_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#unity_catalog_info GoogleBiglakeIcebergCatalog#unity_catalog_info}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo(
  aws_region: str,
  aws_role_arn: str,
  warehouse: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion">aws_region</a></code> | <code>str</code> | The AWS region where the Glue catalog is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | The ARN of the AWS IAM role to assume for accessing the Glue catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse">warehouse</a></code> | <code>str</code> | The AWS Glue warehouse identifier (account ID or S3 table bucket). |

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

The AWS region where the Glue catalog is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#aws_region GoogleBiglakeIcebergCatalog#aws_region}

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

The ARN of the AWS IAM role to assume for accessing the Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#aws_role_arn GoogleBiglakeIcebergCatalog#aws_role_arn}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

The AWS Glue warehouse identifier (account ID or S3 table bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#warehouse GoogleBiglakeIcebergCatalog#warehouse}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions(
  refresh_schedule: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule = None,
  refresh_scope: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule">refresh_schedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | refresh_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope">refresh_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | refresh_scope block. |

---

##### `refresh_schedule`<sup>Optional</sup> <a name="refresh_schedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule"></a>

```python
refresh_schedule: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

refresh_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_schedule GoogleBiglakeIcebergCatalog#refresh_schedule}

---

##### `refresh_scope`<sup>Optional</sup> <a name="refresh_scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope"></a>

```python
refresh_scope: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

refresh_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_scope GoogleBiglakeIcebergCatalog#refresh_scope}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule(
  refresh_interval: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh. |

---

##### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_interval GoogleBiglakeIcebergCatalog#refresh_interval}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope(
  namespace_filters: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters">namespace_filters</a></code> | <code>typing.List[str]</code> | A list of namespace filters to limit which namespaces are synchronized from the remote catalog. |

---

##### `namespace_filters`<sup>Optional</sup> <a name="namespace_filters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters"></a>

```python
namespace_filters: typing.List[str]
```

- *Type:* typing.List[str]

A list of namespace filters to limit which namespaces are synchronized from the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#namespace_filters GoogleBiglakeIcebergCatalog#namespace_filters}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus()
```


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus()
```


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo(
  catalog_name: str,
  instance_name: str,
  service_principal_application_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName">catalog_name</a></code> | <code>str</code> | The name of the catalog within the Unity Catalog instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName">instance_name</a></code> | <code>str</code> | The Databricks workspace instance name. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId">service_principal_application_id</a></code> | <code>str</code> | The application ID of the Databricks service principal for OIDC authentication. |

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

The name of the catalog within the Unity Catalog instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#catalog_name GoogleBiglakeIcebergCatalog#catalog_name}

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

The Databricks workspace instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#instance_name GoogleBiglakeIcebergCatalog#instance_name}

---

##### `service_principal_application_id`<sup>Optional</sup> <a name="service_principal_application_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId"></a>

```python
service_principal_application_id: str
```

- *Type:* str

The application ID of the Databricks service principal for OIDC authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#service_principal_application_id GoogleBiglakeIcebergCatalog#service_principal_application_id}

---

### GoogleBiglakeIcebergCatalogReplicas <a name="GoogleBiglakeIcebergCatalogReplicas" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas()
```


### GoogleBiglakeIcebergCatalogRestrictedLocationsConfig <a name="GoogleBiglakeIcebergCatalogRestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig(
  restricted_locations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations">restricted_locations</a></code> | <code>typing.List[str]</code> | A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it. |

---

##### `restricted_locations`<sup>Optional</sup> <a name="restricted_locations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations"></a>

```python
restricted_locations: typing.List[str]
```

- *Type:* typing.List[str]

A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#restricted_locations GoogleBiglakeIcebergCatalog#restricted_locations}

---

### GoogleBiglakeIcebergCatalogTimeouts <a name="GoogleBiglakeIcebergCatalogTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput">aws_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput">warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn">aws_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `aws_role_arn_input`<sup>Optional</sup> <a name="aws_role_arn_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput"></a>

```python
aws_role_arn_input: str
```

- *Type:* str

---

##### `warehouse_input`<sup>Optional</sup> <a name="warehouse_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput"></a>

```python
warehouse_input: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn"></a>

```python
aws_role_arn: str
```

- *Type:* str

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo">put_glue_catalog_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions">put_refresh_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo">put_unity_catalog_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo">reset_glue_catalog_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions">reset_refresh_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName">reset_service_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo">reset_unity_catalog_info</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_glue_catalog_info` <a name="put_glue_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo"></a>

```python
def put_glue_catalog_info(
  aws_region: str,
  aws_role_arn: str,
  warehouse: str
) -> None
```

###### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo.parameter.awsRegion"></a>

- *Type:* str

The AWS region where the Glue catalog is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#aws_region GoogleBiglakeIcebergCatalog#aws_region}

---

###### `aws_role_arn`<sup>Required</sup> <a name="aws_role_arn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo.parameter.awsRoleArn"></a>

- *Type:* str

The ARN of the AWS IAM role to assume for accessing the Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#aws_role_arn GoogleBiglakeIcebergCatalog#aws_role_arn}

---

###### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo.parameter.warehouse"></a>

- *Type:* str

The AWS Glue warehouse identifier (account ID or S3 table bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#warehouse GoogleBiglakeIcebergCatalog#warehouse}

---

##### `put_refresh_options` <a name="put_refresh_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions"></a>

```python
def put_refresh_options(
  refresh_schedule: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule = None,
  refresh_scope: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope = None
) -> None
```

###### `refresh_schedule`<sup>Optional</sup> <a name="refresh_schedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions.parameter.refreshSchedule"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

refresh_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_schedule GoogleBiglakeIcebergCatalog#refresh_schedule}

---

###### `refresh_scope`<sup>Optional</sup> <a name="refresh_scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions.parameter.refreshScope"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

refresh_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_scope GoogleBiglakeIcebergCatalog#refresh_scope}

---

##### `put_unity_catalog_info` <a name="put_unity_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo"></a>

```python
def put_unity_catalog_info(
  catalog_name: str,
  instance_name: str,
  service_principal_application_id: str = None
) -> None
```

###### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo.parameter.catalogName"></a>

- *Type:* str

The name of the catalog within the Unity Catalog instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#catalog_name GoogleBiglakeIcebergCatalog#catalog_name}

---

###### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo.parameter.instanceName"></a>

- *Type:* str

The Databricks workspace instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#instance_name GoogleBiglakeIcebergCatalog#instance_name}

---

###### `service_principal_application_id`<sup>Optional</sup> <a name="service_principal_application_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo.parameter.servicePrincipalApplicationId"></a>

- *Type:* str

The application ID of the Databricks service principal for OIDC authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#service_principal_application_id GoogleBiglakeIcebergCatalog#service_principal_application_id}

---

##### `reset_glue_catalog_info` <a name="reset_glue_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo"></a>

```python
def reset_glue_catalog_info() -> None
```

##### `reset_refresh_options` <a name="reset_refresh_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions"></a>

```python
def reset_refresh_options() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```

##### `reset_service_directory_name` <a name="reset_service_directory_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName"></a>

```python
def reset_service_directory_name() -> None
```

##### `reset_unity_catalog_info` <a name="reset_unity_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo"></a>

```python
def reset_unity_catalog_info() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo">glue_catalog_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions">refresh_options</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus">refresh_status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo">unity_catalog_info</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput">glue_catalog_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput">refresh_options_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput">service_directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput">unity_catalog_info_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName">service_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_catalog_info`<sup>Required</sup> <a name="glue_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo"></a>

```python
glue_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a>

---

##### `refresh_options`<sup>Required</sup> <a name="refresh_options" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions"></a>

```python
refresh_options: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a>

---

##### `refresh_status`<sup>Required</sup> <a name="refresh_status" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus"></a>

```python
refresh_status: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a>

---

##### `unity_catalog_info`<sup>Required</sup> <a name="unity_catalog_info" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo"></a>

```python
unity_catalog_info: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a>

---

##### `glue_catalog_info_input`<sup>Optional</sup> <a name="glue_catalog_info_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput"></a>

```python
glue_catalog_info_input: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `refresh_options_input`<sup>Optional</sup> <a name="refresh_options_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput"></a>

```python
refresh_options_input: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `service_directory_name_input`<sup>Optional</sup> <a name="service_directory_name_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput"></a>

```python
service_directory_name_input: str
```

- *Type:* str

---

##### `unity_catalog_info_input`<sup>Optional</sup> <a name="unity_catalog_info_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput"></a>

```python
unity_catalog_info_input: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `service_directory_name`<sup>Required</sup> <a name="service_directory_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName"></a>

```python
service_directory_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule">put_refresh_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope">put_refresh_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule">reset_refresh_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope">reset_refresh_scope</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_refresh_schedule` <a name="put_refresh_schedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule"></a>

```python
def put_refresh_schedule(
  refresh_interval: str = None
) -> None
```

###### `refresh_interval`<sup>Optional</sup> <a name="refresh_interval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule.parameter.refreshInterval"></a>

- *Type:* str

The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#refresh_interval GoogleBiglakeIcebergCatalog#refresh_interval}

---

##### `put_refresh_scope` <a name="put_refresh_scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope"></a>

```python
def put_refresh_scope(
  namespace_filters: typing.List[str] = None
) -> None
```

###### `namespace_filters`<sup>Optional</sup> <a name="namespace_filters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope.parameter.namespaceFilters"></a>

- *Type:* typing.List[str]

A list of namespace filters to limit which namespaces are synchronized from the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_biglake_iceberg_catalog#namespace_filters GoogleBiglakeIcebergCatalog#namespace_filters}

---

##### `reset_refresh_schedule` <a name="reset_refresh_schedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule"></a>

```python
def reset_refresh_schedule() -> None
```

##### `reset_refresh_scope` <a name="reset_refresh_scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope"></a>

```python
def reset_refresh_scope() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule">refresh_schedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope">refresh_scope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput">refresh_schedule_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput">refresh_scope_input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `refresh_schedule`<sup>Required</sup> <a name="refresh_schedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule"></a>

```python
refresh_schedule: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a>

---

##### `refresh_scope`<sup>Required</sup> <a name="refresh_scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope"></a>

```python
refresh_scope: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a>

---

##### `refresh_schedule_input`<sup>Optional</sup> <a name="refresh_schedule_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput"></a>

```python
refresh_schedule_input: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `refresh_scope_input`<sup>Optional</sup> <a name="refresh_scope_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput"></a>

```python
refresh_scope_input: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval">reset_refresh_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_refresh_interval` <a name="reset_refresh_interval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval"></a>

```python
def reset_refresh_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput">refresh_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval">refresh_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `refresh_interval_input`<sup>Optional</sup> <a name="refresh_interval_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput"></a>

```python
refresh_interval_input: str
```

- *Type:* str

---

##### `refresh_interval`<sup>Required</sup> <a name="refresh_interval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval"></a>

```python
refresh_interval: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters">reset_namespace_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_namespace_filters` <a name="reset_namespace_filters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters"></a>

```python
def reset_namespace_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput">namespace_filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters">namespace_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespace_filters_input`<sup>Optional</sup> <a name="namespace_filters_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput"></a>

```python
namespace_filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_filters`<sup>Required</sup> <a name="namespace_filters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters"></a>

```python
namespace_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status"></a>

```python
status: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId">reset_service_principal_application_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_principal_application_id` <a name="reset_service_principal_application_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId"></a>

```python
def reset_service_principal_application_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput">service_principal_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId">service_principal_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `service_principal_application_id_input`<sup>Optional</sup> <a name="service_principal_application_id_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput"></a>

```python
service_principal_application_id_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `service_principal_application_id`<sup>Required</sup> <a name="service_principal_application_id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId"></a>

```python
service_principal_application_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---


### GoogleBiglakeIcebergCatalogReplicasList <a name="GoogleBiglakeIcebergCatalogReplicasList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBiglakeIcebergCatalogReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleBiglakeIcebergCatalogReplicasOutputReference <a name="GoogleBiglakeIcebergCatalogReplicasOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas">GoogleBiglakeIcebergCatalogReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogReplicas
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas">GoogleBiglakeIcebergCatalogReplicas</a>

---


### GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference <a name="GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations">reset_restricted_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_restricted_locations` <a name="reset_restricted_locations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations"></a>

```python
def reset_restricted_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput">restricted_locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations">restricted_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restricted_locations_input`<sup>Optional</sup> <a name="restricted_locations_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput"></a>

```python
restricted_locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restricted_locations`<sup>Required</sup> <a name="restricted_locations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations"></a>

```python
restricted_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBiglakeIcebergCatalogRestrictedLocationsConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---


### GoogleBiglakeIcebergCatalogTimeoutsOutputReference <a name="GoogleBiglakeIcebergCatalogTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google_beta import google_biglake_iceberg_catalog

googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GoogleBiglakeIcebergCatalogTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---



