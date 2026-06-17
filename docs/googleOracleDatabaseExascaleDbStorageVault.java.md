# `googleOracleDatabaseExascaleDbStorageVault` Submodule <a name="`googleOracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOracleDatabaseExascaleDbStorageVault <a name="GoogleOracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVault;

GoogleOracleDatabaseExascaleDbStorageVault.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .exascaleDbStorageVaultId(java.lang.String)
    .location(java.lang.String)
    .properties(GoogleOracleDatabaseExascaleDbStorageVaultProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseExascaleDbStorageVaultTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#display_name GoogleOracleDatabaseExascaleDbStorageVault#display_name}

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.exascaleDbStorageVaultId"></a>

- *Type:* java.lang.String

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#location GoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#properties GoogleOracleDatabaseExascaleDbStorageVault#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_policy GoogleOracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_protection GoogleOracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.gcpOracleZone"></a>

- *Type:* java.lang.String

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#gcp_oracle_zone GoogleOracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#labels GoogleOracleDatabaseExascaleDbStorageVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#timeouts GoogleOracleDatabaseExascaleDbStorageVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties"></a>

```java
public void putProperties(GoogleOracleDatabaseExascaleDbStorageVaultProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts"></a>

```java
public void putTimeouts(GoogleOracleDatabaseExascaleDbStorageVaultTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetGcpOracleZone"></a>

```java
public void resetGcpOracleZone()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVault;

GoogleOracleDatabaseExascaleDbStorageVault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVault;

GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVault;

GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVault;

GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleOracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleOracleDatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleOracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleOracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.properties"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeouts"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```java
public java.lang.String getExascaleDbStorageVaultIdInput();
```

- *Type:* java.lang.String

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput"></a>

```java
public java.lang.String getGcpOracleZoneInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.propertiesInput"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```java
public IResolvable|GoogleOracleDatabaseExascaleDbStorageVaultTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultConfig <a name="GoogleOracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultConfig;

GoogleOracleDatabaseExascaleDbStorageVaultConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .exascaleDbStorageVaultId(java.lang.String)
    .location(java.lang.String)
    .properties(GoogleOracleDatabaseExascaleDbStorageVaultProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleOracleDatabaseExascaleDbStorageVaultTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#display_name GoogleOracleDatabaseExascaleDbStorageVault#display_name}

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#location GoogleOracleDatabaseExascaleDbStorageVault#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.properties"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#properties GoogleOracleDatabaseExascaleDbStorageVault#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_policy GoogleOracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#deletion_protection GoogleOracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#gcp_oracle_zone GoogleOracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#labels GoogleOracleDatabaseExascaleDbStorageVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#project GoogleOracleDatabaseExascaleDbStorageVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#timeouts GoogleOracleDatabaseExascaleDbStorageVault#timeouts}

---

### GoogleOracleDatabaseExascaleDbStorageVaultProperties <a name="GoogleOracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultProperties;

GoogleOracleDatabaseExascaleDbStorageVaultProperties.builder()
    .exascaleDbStorageDetails(GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails)
//  .additionalFlashCachePercent(java.lang.Number)
//  .timeZone(GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | exascale_db_storage_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>java.lang.Number</code> | The size of additional flash cache in percentage of high capacity database storage. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | time_zone block. |

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails getExascaleDbStorageDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

exascale_db_storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#exascale_db_storage_details GoogleOracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}

---

##### `additionalFlashCachePercent`<sup>Optional</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent"></a>

```java
public java.lang.Number getAdditionalFlashCachePercent();
```

- *Type:* java.lang.Number

The size of additional flash cache in percentage of high capacity database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#additional_flash_cache_percent GoogleOracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties.property.timeZone"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#time_zone GoogleOracleDatabaseExascaleDbStorageVault#time_zone}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;

GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.builder()
    .totalSizeGbs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs">totalSizeGbs</a></code> | <code>java.lang.Number</code> | The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). |

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs"></a>

```java
public java.lang.Number getTotalSizeGbs();
```

- *Type:* java.lang.Number

The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#total_size_gbs GoogleOracleDatabaseExascaleDbStorageVault#total_size_gbs}

---

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;

GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.builder()
//  .id(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id">id</a></code> | <code>java.lang.String</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version">version</a></code> | <code>java.lang.String</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#id GoogleOracleDatabaseExascaleDbStorageVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#version GoogleOracleDatabaseExascaleDbStorageVault#version}

---

### GoogleOracleDatabaseExascaleDbStorageVaultTimeouts <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeouts" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts;

GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#create GoogleOracleDatabaseExascaleDbStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#delete GoogleOracleDatabaseExascaleDbStorageVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_oracle_database_exascale_db_storage_vault#update GoogleOracleDatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">availableSizeGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput">totalSizeGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">totalSizeGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableSizeGbs`<sup>Required</sup> <a name="availableSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```java
public java.lang.Number getAvailableSizeGbs();
```

- *Type:* java.lang.Number

---

##### `totalSizeGbsInput`<sup>Optional</sup> <a name="totalSizeGbsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput"></a>

```java
public java.lang.Number getTotalSizeGbsInput();
```

- *Type:* java.lang.Number

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```java
public java.lang.Number getTotalSizeGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails">putExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent">resetAdditionalFlashCachePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExascaleDbStorageDetails` <a name="putExascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails"></a>

```java
public void putExascaleDbStorageDetails(GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone"></a>

```java
public void putTimeZone(GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `resetAdditionalFlashCachePercent` <a name="resetAdditionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent"></a>

```java
public void resetAdditionalFlashCachePercent()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">attachedShapeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">availableShapeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">ociUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">vmClusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput">additionalFlashCachePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput">exascaleDbStorageDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachedShapeAttributes`<sup>Required</sup> <a name="attachedShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```java
public java.util.List<java.lang.String> getAttachedShapeAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availableShapeAttributes`<sup>Required</sup> <a name="availableShapeAttributes" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```java
public java.util.List<java.lang.String> getAvailableShapeAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference getExascaleDbStorageDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociUri`<sup>Required</sup> <a name="ociUri" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```java
public java.lang.String getOciUri();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a>

---

##### `vmClusterCount`<sup>Required</sup> <a name="vmClusterCount" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```java
public java.lang.Number getVmClusterCount();
```

- *Type:* java.lang.Number

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```java
public java.util.List<java.lang.String> getVmClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalFlashCachePercentInput`<sup>Optional</sup> <a name="additionalFlashCachePercentInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput"></a>

```java
public java.lang.Number getAdditionalFlashCachePercentInput();
```

- *Type:* java.lang.Number

---

##### `exascaleDbStorageDetailsInput`<sup>Optional</sup> <a name="exascaleDbStorageDetailsInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails getExascaleDbStorageDetailsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone getTimeZoneInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `additionalFlashCachePercent`<sup>Required</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```java
public java.lang.Number getAdditionalFlashCachePercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultProperties">GoogleOracleDatabaseExascaleDbStorageVaultProperties</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference;

new GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```java
public GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">GoogleOracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---


### GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_oracle_database_exascale_db_storage_vault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference;

new GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleOracleDatabaseExascaleDbStorageVaultTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleOracleDatabaseExascaleDbStorageVault.GoogleOracleDatabaseExascaleDbStorageVaultTimeouts">GoogleOracleDatabaseExascaleDbStorageVaultTimeouts</a>

---



