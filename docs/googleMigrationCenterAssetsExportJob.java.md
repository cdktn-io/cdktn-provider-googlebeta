# `googleMigrationCenterAssetsExportJob` Submodule <a name="`googleMigrationCenterAssetsExportJob` Submodule" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleMigrationCenterAssetsExportJob <a name="GoogleMigrationCenterAssetsExportJob" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job google_migration_center_assets_export_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJob;

GoogleMigrationCenterAssetsExportJob.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetsExportJobId(java.lang.String)
    .location(java.lang.String)
//  .condition(GoogleMigrationCenterAssetsExportJobCondition)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .performanceData(GoogleMigrationCenterAssetsExportJobPerformanceData)
//  .project(java.lang.String)
//  .showHidden(java.lang.Boolean|IResolvable)
//  .signedUriDestination(GoogleMigrationCenterAssetsExportJobSignedUriDestination)
//  .timeouts(GoogleMigrationCenterAssetsExportJobTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.assetsExportJobId">assetsExportJobId</a></code> | <code>java.lang.String</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.showHidden">showHidden</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.assetsExportJobId"></a>

- *Type:* java.lang.String

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#assets_export_job_id GoogleMigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#location GoogleMigrationCenterAssetsExportJob#location}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#condition GoogleMigrationCenterAssetsExportJob#condition}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#deletion_policy GoogleMigrationCenterAssetsExportJob#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
  underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
  allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#labels GoogleMigrationCenterAssetsExportJob#labels}

---

##### `performanceData`<sup>Optional</sup> <a name="performanceData" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.performanceData"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#performance_data GoogleMigrationCenterAssetsExportJob#performance_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}.

---

##### `showHidden`<sup>Optional</sup> <a name="showHidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.showHidden"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#show_hidden GoogleMigrationCenterAssetsExportJob#show_hidden}

---

##### `signedUriDestination`<sup>Optional</sup> <a name="signedUriDestination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.signedUriDestination"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#signed_uri_destination GoogleMigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#timeouts GoogleMigrationCenterAssetsExportJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putPerformanceData">putPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putSignedUriDestination">putSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetPerformanceData">resetPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetShowHidden">resetShowHidden</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetSignedUriDestination">resetSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putCondition"></a>

```java
public void putCondition(GoogleMigrationCenterAssetsExportJobCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

---

##### `putPerformanceData` <a name="putPerformanceData" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putPerformanceData"></a>

```java
public void putPerformanceData(GoogleMigrationCenterAssetsExportJobPerformanceData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putPerformanceData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

---

##### `putSignedUriDestination` <a name="putSignedUriDestination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putSignedUriDestination"></a>

```java
public void putSignedUriDestination(GoogleMigrationCenterAssetsExportJobSignedUriDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putSignedUriDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts"></a>

```java
public void putTimeouts(GoogleMigrationCenterAssetsExportJobTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPerformanceData` <a name="resetPerformanceData" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetPerformanceData"></a>

```java
public void resetPerformanceData()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetProject"></a>

```java
public void resetProject()
```

##### `resetShowHidden` <a name="resetShowHidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetShowHidden"></a>

```java
public void resetShowHidden()
```

##### `resetSignedUriDestination` <a name="resetSignedUriDestination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetSignedUriDestination"></a>

```java
public void resetSignedUriDestination()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleMigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJob;

GoogleMigrationCenterAssetsExportJob.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJob;

GoogleMigrationCenterAssetsExportJob.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJob;

GoogleMigrationCenterAssetsExportJob.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJob;

GoogleMigrationCenterAssetsExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleMigrationCenterAssetsExportJob.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleMigrationCenterAssetsExportJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleMigrationCenterAssetsExportJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleMigrationCenterAssetsExportJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleMigrationCenterAssetsExportJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference">GoogleMigrationCenterAssetsExportJobConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.inventory">inventory</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList">GoogleMigrationCenterAssetsExportJobInventoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.networkDependencies">networkDependencies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList">GoogleMigrationCenterAssetsExportJobNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference">GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.recentExecutions">recentExecutions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference">GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference">GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobIdInput">assetsExportJobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceDataInput">performanceDataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHiddenInput">showHiddenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestinationInput">signedUriDestinationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobId">assetsExportJobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHidden">showHidden</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.condition"></a>

```java
public GoogleMigrationCenterAssetsExportJobConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference">GoogleMigrationCenterAssetsExportJobConditionOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `inventory`<sup>Required</sup> <a name="inventory" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.inventory"></a>

```java
public GoogleMigrationCenterAssetsExportJobInventoryList getInventory();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList">GoogleMigrationCenterAssetsExportJobInventoryList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkDependencies`<sup>Required</sup> <a name="networkDependencies" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.networkDependencies"></a>

```java
public GoogleMigrationCenterAssetsExportJobNetworkDependenciesList getNetworkDependencies();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList">GoogleMigrationCenterAssetsExportJobNetworkDependenciesList</a>

---

##### `performanceData`<sup>Required</sup> <a name="performanceData" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceData"></a>

```java
public GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference getPerformanceData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference">GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference</a>

---

##### `recentExecutions`<sup>Required</sup> <a name="recentExecutions" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.recentExecutions"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsList getRecentExecutions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsList</a>

---

##### `signedUriDestination`<sup>Required</sup> <a name="signedUriDestination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestination"></a>

```java
public GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference getSignedUriDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference">GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeouts"></a>

```java
public GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference">GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `assetsExportJobIdInput`<sup>Optional</sup> <a name="assetsExportJobIdInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobIdInput"></a>

```java
public java.lang.String getAssetsExportJobIdInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.conditionInput"></a>

```java
public GoogleMigrationCenterAssetsExportJobCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `performanceDataInput`<sup>Optional</sup> <a name="performanceDataInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.performanceDataInput"></a>

```java
public GoogleMigrationCenterAssetsExportJobPerformanceData getPerformanceDataInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `showHiddenInput`<sup>Optional</sup> <a name="showHiddenInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHiddenInput"></a>

```java
public java.lang.Boolean|IResolvable getShowHiddenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `signedUriDestinationInput`<sup>Optional</sup> <a name="signedUriDestinationInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.signedUriDestinationInput"></a>

```java
public GoogleMigrationCenterAssetsExportJobSignedUriDestination getSignedUriDestinationInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.timeoutsInput"></a>

```java
public IResolvable|GoogleMigrationCenterAssetsExportJobTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.assetsExportJobId"></a>

```java
public java.lang.String getAssetsExportJobId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `showHidden`<sup>Required</sup> <a name="showHidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.showHidden"></a>

```java
public java.lang.Boolean|IResolvable getShowHidden();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJob.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleMigrationCenterAssetsExportJobCondition <a name="GoogleMigrationCenterAssetsExportJobCondition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobCondition;

GoogleMigrationCenterAssetsExportJobCondition.builder()
//  .filter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition.property.filter">filter</a></code> | <code>java.lang.String</code> | Assets filter, supports the same syntax as asset listing. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Assets filter, supports the same syntax as asset listing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#filter GoogleMigrationCenterAssetsExportJob#filter}

---

### GoogleMigrationCenterAssetsExportJobConfig <a name="GoogleMigrationCenterAssetsExportJobConfig" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobConfig;

GoogleMigrationCenterAssetsExportJobConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .assetsExportJobId(java.lang.String)
    .location(java.lang.String)
//  .condition(GoogleMigrationCenterAssetsExportJobCondition)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .performanceData(GoogleMigrationCenterAssetsExportJobPerformanceData)
//  .project(java.lang.String)
//  .showHidden(java.lang.Boolean|IResolvable)
//  .signedUriDestination(GoogleMigrationCenterAssetsExportJobSignedUriDestination)
//  .timeouts(GoogleMigrationCenterAssetsExportJobTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.assetsExportJobId">assetsExportJobId</a></code> | <code>java.lang.String</code> | The ID to use for the asset export job. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. Labels must meet the following constraints:. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.performanceData">performanceData</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | performance_data block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.showHidden">showHidden</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When this value is set to 'true' the response will include all assets, including those that are hidden. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.signedUriDestination">signedUriDestination</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | signed_uri_destination block. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `assetsExportJobId`<sup>Required</sup> <a name="assetsExportJobId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.assetsExportJobId"></a>

```java
public java.lang.String getAssetsExportJobId();
```

- *Type:* java.lang.String

The ID to use for the asset export job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#assets_export_job_id GoogleMigrationCenterAssetsExportJob#assets_export_job_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#location GoogleMigrationCenterAssetsExportJob#location}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.condition"></a>

```java
public GoogleMigrationCenterAssetsExportJobCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#condition GoogleMigrationCenterAssetsExportJob#condition}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#deletion_policy GoogleMigrationCenterAssetsExportJob#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#id GoogleMigrationCenterAssetsExportJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs. Labels must meet the following constraints:.

* Keys and values can contain only lowercase letters, numeric characters,
  underscores, and dashes.
* All characters must use UTF-8 encoding, and international characters are
  allowed.
* Keys must start with a lowercase letter or international character.
* Each resource is limited to a maximum of 64 labels.

Both keys and values are additionally constrained to be <= 128 bytes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#labels GoogleMigrationCenterAssetsExportJob#labels}

---

##### `performanceData`<sup>Optional</sup> <a name="performanceData" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.performanceData"></a>

```java
public GoogleMigrationCenterAssetsExportJobPerformanceData getPerformanceData();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

performance_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#performance_data GoogleMigrationCenterAssetsExportJob#performance_data}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#project GoogleMigrationCenterAssetsExportJob#project}.

---

##### `showHidden`<sup>Optional</sup> <a name="showHidden" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.showHidden"></a>

```java
public java.lang.Boolean|IResolvable getShowHidden();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When this value is set to 'true' the response will include all assets, including those that are hidden.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#show_hidden GoogleMigrationCenterAssetsExportJob#show_hidden}

---

##### `signedUriDestination`<sup>Optional</sup> <a name="signedUriDestination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.signedUriDestination"></a>

```java
public GoogleMigrationCenterAssetsExportJobSignedUriDestination getSignedUriDestination();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

signed_uri_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#signed_uri_destination GoogleMigrationCenterAssetsExportJob#signed_uri_destination}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConfig.property.timeouts"></a>

```java
public GoogleMigrationCenterAssetsExportJobTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#timeouts GoogleMigrationCenterAssetsExportJob#timeouts}

---

### GoogleMigrationCenterAssetsExportJobInventory <a name="GoogleMigrationCenterAssetsExportJobInventory" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobInventory;

GoogleMigrationCenterAssetsExportJobInventory.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobNetworkDependencies <a name="GoogleMigrationCenterAssetsExportJobNetworkDependencies" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobNetworkDependencies;

GoogleMigrationCenterAssetsExportJobNetworkDependencies.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobPerformanceData <a name="GoogleMigrationCenterAssetsExportJobPerformanceData" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobPerformanceData;

GoogleMigrationCenterAssetsExportJobPerformanceData.builder()
//  .maxDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData.property.maxDays">maxDays</a></code> | <code>java.lang.Number</code> | When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available. |

---

##### `maxDays`<sup>Optional</sup> <a name="maxDays" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData.property.maxDays"></a>

```java
public java.lang.Number getMaxDays();
```

- *Type:* java.lang.Number

When this value is set to a positive integer, performance data will be returned for the most recent days for which data is available.

When this value is unset (or set to zero),
all available data is returned.
The maximum value is 420; values above 420 will be coerced to 420.
If unset (0 value) a default value of 40 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#max_days GoogleMigrationCenterAssetsExportJob#max_days}

---

### GoogleMigrationCenterAssetsExportJobRecentExecutions <a name="GoogleMigrationCenterAssetsExportJobRecentExecutions" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutions;

GoogleMigrationCenterAssetsExportJobRecentExecutions.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResult <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResult" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResult.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris;

GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris.builder()
    .build();
```


### GoogleMigrationCenterAssetsExportJobSignedUriDestination <a name="GoogleMigrationCenterAssetsExportJobSignedUriDestination" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobSignedUriDestination;

GoogleMigrationCenterAssetsExportJobSignedUriDestination.builder()
    .fileFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | The file format to export. Possible values: CSV XLSX. |

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

The file format to export. Possible values: CSV XLSX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#file_format GoogleMigrationCenterAssetsExportJob#file_format}

---

### GoogleMigrationCenterAssetsExportJobTimeouts <a name="GoogleMigrationCenterAssetsExportJobTimeouts" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobTimeouts;

GoogleMigrationCenterAssetsExportJobTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#create GoogleMigrationCenterAssetsExportJob#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#delete GoogleMigrationCenterAssetsExportJob#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#update GoogleMigrationCenterAssetsExportJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#create GoogleMigrationCenterAssetsExportJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#delete GoogleMigrationCenterAssetsExportJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_migration_center_assets_export_job#update GoogleMigrationCenterAssetsExportJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleMigrationCenterAssetsExportJobConditionOutputReference <a name="GoogleMigrationCenterAssetsExportJobConditionOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobConditionOutputReference;

new GoogleMigrationCenterAssetsExportJobConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobConditionOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobCondition">GoogleMigrationCenterAssetsExportJobCondition</a>

---


### GoogleMigrationCenterAssetsExportJobInventoryList <a name="GoogleMigrationCenterAssetsExportJobInventoryList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobInventoryList;

new GoogleMigrationCenterAssetsExportJobInventoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobInventoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobInventoryOutputReference <a name="GoogleMigrationCenterAssetsExportJobInventoryOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobInventoryOutputReference;

new GoogleMigrationCenterAssetsExportJobInventoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory">GoogleMigrationCenterAssetsExportJobInventory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventoryOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobInventory getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobInventory">GoogleMigrationCenterAssetsExportJobInventory</a>

---


### GoogleMigrationCenterAssetsExportJobNetworkDependenciesList <a name="GoogleMigrationCenterAssetsExportJobNetworkDependenciesList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList;

new GoogleMigrationCenterAssetsExportJobNetworkDependenciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference <a name="GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference;

new GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies">GoogleMigrationCenterAssetsExportJobNetworkDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependenciesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobNetworkDependencies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobNetworkDependencies">GoogleMigrationCenterAssetsExportJobNetworkDependencies</a>

---


### GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference <a name="GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference;

new GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays">resetMaxDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxDays` <a name="resetMaxDays" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.resetMaxDays"></a>

```java
public void resetMaxDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput">maxDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays">maxDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxDaysInput`<sup>Optional</sup> <a name="maxDaysInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDaysInput"></a>

```java
public java.lang.Number getMaxDaysInput();
```

- *Type:* java.lang.Number

---

##### `maxDays`<sup>Required</sup> <a name="maxDays" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.maxDays"></a>

```java
public java.lang.Number getMaxDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceDataOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobPerformanceData getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobPerformanceData">GoogleMigrationCenterAssetsExportJobPerformanceData</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId">executionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount">requestedAssetCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result">result</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions">GoogleMigrationCenterAssetsExportJobRecentExecutions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `executionId`<sup>Required</sup> <a name="executionId" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.executionId"></a>

```java
public java.lang.String getExecutionId();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `requestedAssetCount`<sup>Required</sup> <a name="requestedAssetCount" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.requestedAssetCount"></a>

```java
public java.lang.Number getRequestedAssetCount();
```

- *Type:* java.lang.Number

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.result"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutions">GoogleMigrationCenterAssetsExportJobRecentExecutions</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetails</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.details"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList getDetails();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultError</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount">columnsCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount">rowCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri">signedUri</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `columnsCount`<sup>Required</sup> <a name="columnsCount" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.columnsCount"></a>

```java
public java.lang.Number getColumnsCount();
```

- *Type:* java.lang.Number

---

##### `rowCount`<sup>Required</sup> <a name="rowCount" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.rowCount"></a>

```java
public java.lang.Number getRowCount();
```

- *Type:* java.lang.Number

---

##### `signedUri`<sup>Required</sup> <a name="signedUri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.signedUri"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList getSignedUri();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFile</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUriOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileSignedUri</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile">csvOutputFile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes">fileSizeBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile">xlsxOutputFile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csvOutputFile`<sup>Required</sup> <a name="csvOutputFile" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.csvOutputFile"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList getCsvOutputFile();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesCsvOutputFileList</a>

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.fileSizeBytes"></a>

```java
public java.lang.String getFileSizeBytes();
```

- *Type:* java.lang.String

---

##### `xlsxOutputFile`<sup>Required</sup> <a name="xlsxOutputFile" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.xlsxOutputFile"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList getXlsxOutputFile();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntries</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri">signedUri</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signedUri`<sup>Required</sup> <a name="signedUri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.signedUri"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList getSignedUri();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFile</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUriOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesXlsxOutputFileSignedUri</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.entries"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesEntriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFiles</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles">outputFiles</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris">signedUris</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult">GoogleMigrationCenterAssetsExportJobRecentExecutionsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.error"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultErrorList</a>

---

##### `outputFiles`<sup>Required</sup> <a name="outputFiles" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.outputFiles"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList getOutputFiles();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputFilesList</a>

---

##### `signedUris`<sup>Required</sup> <a name="signedUris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.signedUris"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList getSignedUris();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResult">GoogleMigrationCenterAssetsExportJobRecentExecutionsResult</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris">signedUris</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `signedUris`<sup>Required</sup> <a name="signedUris" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.signedUris"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList getSignedUris();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUris</a>

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference <a name="GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference;

new GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUrisOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris">GoogleMigrationCenterAssetsExportJobRecentExecutionsResultSignedUrisSignedUris</a>

---


### GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference <a name="GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference;

new GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput">fileFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat">fileFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileFormatInput`<sup>Optional</sup> <a name="fileFormatInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormatInput"></a>

```java
public java.lang.String getFileFormatInput();
```

- *Type:* java.lang.String

---

##### `fileFormat`<sup>Required</sup> <a name="fileFormat" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.fileFormat"></a>

```java
public java.lang.String getFileFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestinationOutputReference.property.internalValue"></a>

```java
public GoogleMigrationCenterAssetsExportJobSignedUriDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobSignedUriDestination">GoogleMigrationCenterAssetsExportJobSignedUriDestination</a>

---


### GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference <a name="GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_migration_center_assets_export_job.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference;

new GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleMigrationCenterAssetsExportJobTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleMigrationCenterAssetsExportJob.GoogleMigrationCenterAssetsExportJobTimeouts">GoogleMigrationCenterAssetsExportJobTimeouts</a>

---



