# `googleBiglakeIcebergCatalog` Submodule <a name="`googleBiglakeIcebergCatalog` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergCatalog <a name="GoogleBiglakeIcebergCatalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog google_biglake_iceberg_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalog;

GoogleBiglakeIcebergCatalog.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogType(java.lang.String)
    .name(java.lang.String)
//  .credentialMode(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .federatedCatalogOptions(GoogleBiglakeIcebergCatalogFederatedCatalogOptions)
//  .id(java.lang.String)
//  .primaryLocation(java.lang.String)
//  .project(java.lang.String)
//  .restrictedLocationsConfig(GoogleBiglakeIcebergCatalogRestrictedLocationsConfig)
//  .timeouts(GoogleBiglakeIcebergCatalogTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.catalogType">catalogType</a></code> | <code>java.lang.String</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.credentialMode">credentialMode</a></code> | <code>java.lang.String</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.federatedCatalogOptions">federatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.restrictedLocationsConfig">restrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.catalogType"></a>

- *Type:* java.lang.String

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#catalog_type GoogleBiglakeIcebergCatalog#catalog_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#name GoogleBiglakeIcebergCatalog#name}

---

##### `credentialMode`<sup>Optional</sup> <a name="credentialMode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.credentialMode"></a>

- *Type:* java.lang.String

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#credential_mode GoogleBiglakeIcebergCatalog#credential_mode}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.defaultLocation"></a>

- *Type:* java.lang.String

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#default_location GoogleBiglakeIcebergCatalog#default_location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#deletion_policy GoogleBiglakeIcebergCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#description GoogleBiglakeIcebergCatalog#description}

---

##### `federatedCatalogOptions`<sup>Optional</sup> <a name="federatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.federatedCatalogOptions"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#federated_catalog_options GoogleBiglakeIcebergCatalog#federated_catalog_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryLocation`<sup>Optional</sup> <a name="primaryLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.primaryLocation"></a>

- *Type:* java.lang.String

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#primary_location GoogleBiglakeIcebergCatalog#primary_location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}.

---

##### `restrictedLocationsConfig`<sup>Optional</sup> <a name="restrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.restrictedLocationsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#restricted_locations_config GoogleBiglakeIcebergCatalog#restricted_locations_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#timeouts GoogleBiglakeIcebergCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions">putFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig">putRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetCredentialMode">resetCredentialMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDefaultLocation">resetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetFederatedCatalogOptions">resetFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetPrimaryLocation">resetPrimaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetRestrictedLocationsConfig">resetRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFederatedCatalogOptions` <a name="putFederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions"></a>

```java
public void putFederatedCatalogOptions(GoogleBiglakeIcebergCatalogFederatedCatalogOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `putRestrictedLocationsConfig` <a name="putRestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig"></a>

```java
public void putRestrictedLocationsConfig(GoogleBiglakeIcebergCatalogRestrictedLocationsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts"></a>

```java
public void putTimeouts(GoogleBiglakeIcebergCatalogTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---

##### `resetCredentialMode` <a name="resetCredentialMode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetCredentialMode"></a>

```java
public void resetCredentialMode()
```

##### `resetDefaultLocation` <a name="resetDefaultLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDefaultLocation"></a>

```java
public void resetDefaultLocation()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFederatedCatalogOptions` <a name="resetFederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetFederatedCatalogOptions"></a>

```java
public void resetFederatedCatalogOptions()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetId"></a>

```java
public void resetId()
```

##### `resetPrimaryLocation` <a name="resetPrimaryLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetPrimaryLocation"></a>

```java
public void resetPrimaryLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetProject"></a>

```java
public void resetProject()
```

##### `resetRestrictedLocationsConfig` <a name="resetRestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetRestrictedLocationsConfig"></a>

```java
public void resetRestrictedLocationsConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalog;

GoogleBiglakeIcebergCatalog.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalog;

GoogleBiglakeIcebergCatalog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalog;

GoogleBiglakeIcebergCatalog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalog;

GoogleBiglakeIcebergCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBiglakeIcebergCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBiglakeIcebergCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBiglakeIcebergCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccount">biglakeServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccountId">biglakeServiceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptions">federatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList">GoogleBiglakeIcebergCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfig">restrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.storageRegions">storageRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference">GoogleBiglakeIcebergCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogTypeInput">catalogTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialModeInput">credentialModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocationInput">defaultLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptionsInput">federatedCatalogOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocationInput">primaryLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfigInput">restrictedLocationsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogType">catalogType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialMode">credentialMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `biglakeServiceAccount`<sup>Required</sup> <a name="biglakeServiceAccount" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccount"></a>

```java
public java.lang.String getBiglakeServiceAccount();
```

- *Type:* java.lang.String

---

##### `biglakeServiceAccountId`<sup>Required</sup> <a name="biglakeServiceAccountId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccountId"></a>

```java
public java.lang.String getBiglakeServiceAccountId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `federatedCatalogOptions`<sup>Required</sup> <a name="federatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptions"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference getFederatedCatalogOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a>

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.replicas"></a>

```java
public GoogleBiglakeIcebergCatalogReplicasList getReplicas();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList">GoogleBiglakeIcebergCatalogReplicasList</a>

---

##### `restrictedLocationsConfig`<sup>Required</sup> <a name="restrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfig"></a>

```java
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference getRestrictedLocationsConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a>

---

##### `storageRegions`<sup>Required</sup> <a name="storageRegions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.storageRegions"></a>

```java
public java.util.List<java.lang.String> getStorageRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeouts"></a>

```java
public GoogleBiglakeIcebergCatalogTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference">GoogleBiglakeIcebergCatalogTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `catalogTypeInput`<sup>Optional</sup> <a name="catalogTypeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogTypeInput"></a>

```java
public java.lang.String getCatalogTypeInput();
```

- *Type:* java.lang.String

---

##### `credentialModeInput`<sup>Optional</sup> <a name="credentialModeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialModeInput"></a>

```java
public java.lang.String getCredentialModeInput();
```

- *Type:* java.lang.String

---

##### `defaultLocationInput`<sup>Optional</sup> <a name="defaultLocationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocationInput"></a>

```java
public java.lang.String getDefaultLocationInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `federatedCatalogOptionsInput`<sup>Optional</sup> <a name="federatedCatalogOptionsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptionsInput"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptions getFederatedCatalogOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryLocationInput`<sup>Optional</sup> <a name="primaryLocationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocationInput"></a>

```java
public java.lang.String getPrimaryLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `restrictedLocationsConfigInput`<sup>Optional</sup> <a name="restrictedLocationsConfigInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfigInput"></a>

```java
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfig getRestrictedLocationsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBiglakeIcebergCatalogTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogType"></a>

```java
public java.lang.String getCatalogType();
```

- *Type:* java.lang.String

---

##### `credentialMode`<sup>Required</sup> <a name="credentialMode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialMode"></a>

```java
public java.lang.String getCredentialMode();
```

- *Type:* java.lang.String

---

##### `defaultLocation`<sup>Required</sup> <a name="defaultLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocation"></a>

```java
public java.lang.String getPrimaryLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergCatalogConfig <a name="GoogleBiglakeIcebergCatalogConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogConfig;

GoogleBiglakeIcebergCatalogConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogType(java.lang.String)
    .name(java.lang.String)
//  .credentialMode(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .federatedCatalogOptions(GoogleBiglakeIcebergCatalogFederatedCatalogOptions)
//  .id(java.lang.String)
//  .primaryLocation(java.lang.String)
//  .project(java.lang.String)
//  .restrictedLocationsConfig(GoogleBiglakeIcebergCatalogRestrictedLocationsConfig)
//  .timeouts(GoogleBiglakeIcebergCatalogTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.catalogType">catalogType</a></code> | <code>java.lang.String</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.credentialMode">credentialMode</a></code> | <code>java.lang.String</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.federatedCatalogOptions">federatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.restrictedLocationsConfig">restrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.catalogType"></a>

```java
public java.lang.String getCatalogType();
```

- *Type:* java.lang.String

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#catalog_type GoogleBiglakeIcebergCatalog#catalog_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#name GoogleBiglakeIcebergCatalog#name}

---

##### `credentialMode`<sup>Optional</sup> <a name="credentialMode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.credentialMode"></a>

```java
public java.lang.String getCredentialMode();
```

- *Type:* java.lang.String

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#credential_mode GoogleBiglakeIcebergCatalog#credential_mode}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#default_location GoogleBiglakeIcebergCatalog#default_location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#deletion_policy GoogleBiglakeIcebergCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#description GoogleBiglakeIcebergCatalog#description}

---

##### `federatedCatalogOptions`<sup>Optional</sup> <a name="federatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.federatedCatalogOptions"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptions getFederatedCatalogOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#federated_catalog_options GoogleBiglakeIcebergCatalog#federated_catalog_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryLocation`<sup>Optional</sup> <a name="primaryLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.primaryLocation"></a>

```java
public java.lang.String getPrimaryLocation();
```

- *Type:* java.lang.String

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#primary_location GoogleBiglakeIcebergCatalog#primary_location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}.

---

##### `restrictedLocationsConfig`<sup>Optional</sup> <a name="restrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.restrictedLocationsConfig"></a>

```java
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfig getRestrictedLocationsConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#restricted_locations_config GoogleBiglakeIcebergCatalog#restricted_locations_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.timeouts"></a>

```java
public GoogleBiglakeIcebergCatalogTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#timeouts GoogleBiglakeIcebergCatalog#timeouts}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptions <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions;

GoogleBiglakeIcebergCatalogFederatedCatalogOptions.builder()
//  .glueCatalogInfo(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo)
//  .refreshOptions(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions)
//  .secretName(java.lang.String)
//  .serviceDirectoryName(java.lang.String)
//  .unityCatalogInfo(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo">glueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | glue_catalog_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions">refreshOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | refresh_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.secretName">secretName</a></code> | <code>java.lang.String</code> | The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName">serviceDirectoryName</a></code> | <code>java.lang.String</code> | The Service Directory service name for private network connectivity through Cross-Cloud Interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo">unityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | unity_catalog_info block. |

---

##### `glueCatalogInfo`<sup>Optional</sup> <a name="glueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo getGlueCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

glue_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#glue_catalog_info GoogleBiglakeIcebergCatalog#glue_catalog_info}

---

##### `refreshOptions`<sup>Optional</sup> <a name="refreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions getRefreshOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

refresh_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#refresh_options GoogleBiglakeIcebergCatalog#refresh_options}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#secret_name GoogleBiglakeIcebergCatalog#secret_name}

---

##### `serviceDirectoryName`<sup>Optional</sup> <a name="serviceDirectoryName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName"></a>

```java
public java.lang.String getServiceDirectoryName();
```

- *Type:* java.lang.String

The Service Directory service name for private network connectivity through Cross-Cloud Interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#service_directory_name GoogleBiglakeIcebergCatalog#service_directory_name}

---

##### `unityCatalogInfo`<sup>Optional</sup> <a name="unityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo getUnityCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

unity_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#unity_catalog_info GoogleBiglakeIcebergCatalog#unity_catalog_info}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo;

GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.builder()
    .awsRegion(java.lang.String)
    .awsRoleArn(java.lang.String)
    .warehouse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS region where the Glue catalog is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS IAM role to assume for accessing the Glue catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The AWS Glue warehouse identifier (account ID or S3 table bucket). |

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS region where the Glue catalog is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#aws_region GoogleBiglakeIcebergCatalog#aws_region}

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

The ARN of the AWS IAM role to assume for accessing the Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#aws_role_arn GoogleBiglakeIcebergCatalog#aws_role_arn}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

The AWS Glue warehouse identifier (account ID or S3 table bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#warehouse GoogleBiglakeIcebergCatalog#warehouse}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions;

GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.builder()
//  .refreshSchedule(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule)
//  .refreshScope(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule">refreshSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | refresh_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope">refreshScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | refresh_scope block. |

---

##### `refreshSchedule`<sup>Optional</sup> <a name="refreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule getRefreshSchedule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

refresh_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#refresh_schedule GoogleBiglakeIcebergCatalog#refresh_schedule}

---

##### `refreshScope`<sup>Optional</sup> <a name="refreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope getRefreshScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

refresh_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#refresh_scope GoogleBiglakeIcebergCatalog#refresh_scope}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule;

GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.builder()
//  .refreshInterval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh. |

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#refresh_interval GoogleBiglakeIcebergCatalog#refresh_interval}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope;

GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.builder()
//  .namespaceFilters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters">namespaceFilters</a></code> | <code>java.util.List<java.lang.String></code> | A list of namespace filters to limit which namespaces are synchronized from the remote catalog. |

---

##### `namespaceFilters`<sup>Optional</sup> <a name="namespaceFilters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters"></a>

```java
public java.util.List<java.lang.String> getNamespaceFilters();
```

- *Type:* java.util.List<java.lang.String>

A list of namespace filters to limit which namespaces are synchronized from the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#namespace_filters GoogleBiglakeIcebergCatalog#namespace_filters}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus;

GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus.builder()
    .build();
```


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus;

GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus.builder()
    .build();
```


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo;

GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.builder()
    .catalogName(java.lang.String)
    .instanceName(java.lang.String)
//  .servicePrincipalApplicationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | The name of the catalog within the Unity Catalog instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The Databricks workspace instance name. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId">servicePrincipalApplicationId</a></code> | <code>java.lang.String</code> | The application ID of the Databricks service principal for OIDC authentication. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

The name of the catalog within the Unity Catalog instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#catalog_name GoogleBiglakeIcebergCatalog#catalog_name}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

The Databricks workspace instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#instance_name GoogleBiglakeIcebergCatalog#instance_name}

---

##### `servicePrincipalApplicationId`<sup>Optional</sup> <a name="servicePrincipalApplicationId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId"></a>

```java
public java.lang.String getServicePrincipalApplicationId();
```

- *Type:* java.lang.String

The application ID of the Databricks service principal for OIDC authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#service_principal_application_id GoogleBiglakeIcebergCatalog#service_principal_application_id}

---

### GoogleBiglakeIcebergCatalogReplicas <a name="GoogleBiglakeIcebergCatalogReplicas" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogReplicas;

GoogleBiglakeIcebergCatalogReplicas.builder()
    .build();
```


### GoogleBiglakeIcebergCatalogRestrictedLocationsConfig <a name="GoogleBiglakeIcebergCatalogRestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig;

GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.builder()
//  .restrictedLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations">restrictedLocations</a></code> | <code>java.util.List<java.lang.String></code> | A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it. |

---

##### `restrictedLocations`<sup>Optional</sup> <a name="restrictedLocations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations"></a>

```java
public java.util.List<java.lang.String> getRestrictedLocations();
```

- *Type:* java.util.List<java.lang.String>

A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#restricted_locations GoogleBiglakeIcebergCatalog#restricted_locations}

---

### GoogleBiglakeIcebergCatalogTimeouts <a name="GoogleBiglakeIcebergCatalogTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogTimeouts;

GoogleBiglakeIcebergCatalogTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput"></a>

```java
public java.lang.String getAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo">putGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions">putRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo">putUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo">resetGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions">resetRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName">resetServiceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo">resetUnityCatalogInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueCatalogInfo` <a name="putGlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo"></a>

```java
public void putGlueCatalogInfo(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `putRefreshOptions` <a name="putRefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions"></a>

```java
public void putRefreshOptions(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `putUnityCatalogInfo` <a name="putUnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo"></a>

```java
public void putUnityCatalogInfo(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `resetGlueCatalogInfo` <a name="resetGlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo"></a>

```java
public void resetGlueCatalogInfo()
```

##### `resetRefreshOptions` <a name="resetRefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions"></a>

```java
public void resetRefreshOptions()
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```

##### `resetServiceDirectoryName` <a name="resetServiceDirectoryName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName"></a>

```java
public void resetServiceDirectoryName()
```

##### `resetUnityCatalogInfo` <a name="resetUnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo"></a>

```java
public void resetUnityCatalogInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo">glueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions">refreshOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus">refreshStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo">unityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput">glueCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput">refreshOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput">serviceDirectoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput">unityCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName">serviceDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueCatalogInfo`<sup>Required</sup> <a name="glueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference getGlueCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a>

---

##### `refreshOptions`<sup>Required</sup> <a name="refreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference getRefreshOptions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a>

---

##### `refreshStatus`<sup>Required</sup> <a name="refreshStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList getRefreshStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a>

---

##### `unityCatalogInfo`<sup>Required</sup> <a name="unityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference getUnityCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a>

---

##### `glueCatalogInfoInput`<sup>Optional</sup> <a name="glueCatalogInfoInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo getGlueCatalogInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `refreshOptionsInput`<sup>Optional</sup> <a name="refreshOptionsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions getRefreshOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryNameInput`<sup>Optional</sup> <a name="serviceDirectoryNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput"></a>

```java
public java.lang.String getServiceDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `unityCatalogInfoInput`<sup>Optional</sup> <a name="unityCatalogInfoInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo getUnityCatalogInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryName`<sup>Required</sup> <a name="serviceDirectoryName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName"></a>

```java
public java.lang.String getServiceDirectoryName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule">putRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope">putRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule">resetRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope">resetRefreshScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRefreshSchedule` <a name="putRefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule"></a>

```java
public void putRefreshSchedule(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `putRefreshScope` <a name="putRefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope"></a>

```java
public void putRefreshScope(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `resetRefreshSchedule` <a name="resetRefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule"></a>

```java
public void resetRefreshSchedule()
```

##### `resetRefreshScope` <a name="resetRefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope"></a>

```java
public void resetRefreshScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule">refreshSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope">refreshScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput">refreshScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput">refreshScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `refreshSchedule`<sup>Required</sup> <a name="refreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference getRefreshSchedule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a>

---

##### `refreshScope`<sup>Required</sup> <a name="refreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference getRefreshScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a>

---

##### `refreshScheduleInput`<sup>Optional</sup> <a name="refreshScheduleInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule getRefreshScheduleInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `refreshScopeInput`<sup>Optional</sup> <a name="refreshScopeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope getRefreshScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval"></a>

```java
public void resetRefreshInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput"></a>

```java
public java.lang.String getRefreshIntervalInput();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters">resetNamespaceFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespaceFilters` <a name="resetNamespaceFilters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters"></a>

```java
public void resetNamespaceFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput">namespaceFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters">namespaceFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceFiltersInput`<sup>Optional</sup> <a name="namespaceFiltersInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput"></a>

```java
public java.util.List<java.lang.String> getNamespaceFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceFilters`<sup>Required</sup> <a name="namespaceFilters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters"></a>

```java
public java.util.List<java.lang.String> getNamespaceFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList getStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId">resetServicePrincipalApplicationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalApplicationId` <a name="resetServicePrincipalApplicationId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId"></a>

```java
public void resetServicePrincipalApplicationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput">servicePrincipalApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId">servicePrincipalApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalApplicationIdInput`<sup>Optional</sup> <a name="servicePrincipalApplicationIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput"></a>

```java
public java.lang.String getServicePrincipalApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `servicePrincipalApplicationId`<sup>Required</sup> <a name="servicePrincipalApplicationId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId"></a>

```java
public java.lang.String getServicePrincipalApplicationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---


### GoogleBiglakeIcebergCatalogReplicasList <a name="GoogleBiglakeIcebergCatalogReplicasList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogReplicasList;

new GoogleBiglakeIcebergCatalogReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get"></a>

```java
public GoogleBiglakeIcebergCatalogReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBiglakeIcebergCatalogReplicasOutputReference <a name="GoogleBiglakeIcebergCatalogReplicasOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogReplicasOutputReference;

new GoogleBiglakeIcebergCatalogReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas">GoogleBiglakeIcebergCatalogReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogReplicas getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas">GoogleBiglakeIcebergCatalogReplicas</a>

---


### GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference <a name="GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference;

new GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations">resetRestrictedLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRestrictedLocations` <a name="resetRestrictedLocations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations"></a>

```java
public void resetRestrictedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput">restrictedLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations">restrictedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restrictedLocationsInput`<sup>Optional</sup> <a name="restrictedLocationsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedLocations`<sup>Required</sup> <a name="restrictedLocations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations"></a>

```java
public java.util.List<java.lang.String> getRestrictedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue"></a>

```java
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---


### GoogleBiglakeIcebergCatalogTimeoutsOutputReference <a name="GoogleBiglakeIcebergCatalogTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_biglake_iceberg_catalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference;

new GoogleBiglakeIcebergCatalogTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBiglakeIcebergCatalogTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---



