# `googleGkeBackupBackupPlan` Submodule <a name="`googleGkeBackupBackupPlan` Submodule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeBackupBackupPlan <a name="GoogleGkeBackupBackupPlan" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan google_gke_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlan;

GoogleGkeBackupBackupPlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .backupConfig(GoogleGkeBackupBackupPlanBackupConfig)
//  .backupSchedule(GoogleGkeBackupBackupPlanBackupSchedule)
//  .deactivated(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .retentionPolicy(GoogleGkeBackupBackupPlanRetentionPolicy)
//  .timeouts(GoogleGkeBackupBackupPlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The region of the Backup Plan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupConfig">backupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.deactivated">deactivated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#cluster GoogleGkeBackupBackupPlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#location GoogleGkeBackupBackupPlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_config GoogleGkeBackupBackupPlan#backup_config}

---

##### `backupSchedule`<sup>Optional</sup> <a name="backupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.backupSchedule"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_schedule GoogleGkeBackupBackupPlan#backup_schedule}

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.deactivated"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#deactivated GoogleGkeBackupBackupPlan#deactivated}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#deletion_policy GoogleGkeBackupBackupPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#description GoogleGkeBackupBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#labels GoogleGkeBackupBackupPlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.retentionPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#retention_policy GoogleGkeBackupBackupPlan#retention_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#timeouts GoogleGkeBackupBackupPlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig">putBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule">putBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy">putRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupConfig">resetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupSchedule">resetBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeactivated">resetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetRetentionPolicy">resetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackupConfig` <a name="putBackupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig"></a>

```java
public void putBackupConfig(GoogleGkeBackupBackupPlanBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---

##### `putBackupSchedule` <a name="putBackupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule"></a>

```java
public void putBackupSchedule(GoogleGkeBackupBackupPlanBackupSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putBackupSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---

##### `putRetentionPolicy` <a name="putRetentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy"></a>

```java
public void putRetentionPolicy(GoogleGkeBackupBackupPlanRetentionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts"></a>

```java
public void putTimeouts(GoogleGkeBackupBackupPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

---

##### `resetBackupConfig` <a name="resetBackupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupConfig"></a>

```java
public void resetBackupConfig()
```

##### `resetBackupSchedule` <a name="resetBackupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetBackupSchedule"></a>

```java
public void resetBackupSchedule()
```

##### `resetDeactivated` <a name="resetDeactivated" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeactivated"></a>

```java
public void resetDeactivated()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetProject"></a>

```java
public void resetProject()
```

##### `resetRetentionPolicy` <a name="resetRetentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetRetentionPolicy"></a>

```java
public void resetRetentionPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeBackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlan;

GoogleGkeBackupBackupPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlan;

GoogleGkeBackupBackupPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlan;

GoogleGkeBackupBackupPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlan;

GoogleGkeBackupBackupPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeBackupBackupPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleGkeBackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeBackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeBackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeBackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference">GoogleGkeBackupBackupPlanBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference">GoogleGkeBackupBackupPlanBackupScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedNamespaceCount">protectedNamespaceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedPodCount">protectedPodCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference">GoogleGkeBackupBackupPlanRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.stateReason">stateReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference">GoogleGkeBackupBackupPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfigInput">backupConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupScheduleInput">backupScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivatedInput">deactivatedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicyInput">retentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivated">deactivated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfig"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigOutputReference getBackupConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference">GoogleGkeBackupBackupPlanBackupConfigOutputReference</a>

---

##### `backupSchedule`<sup>Required</sup> <a name="backupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupSchedule"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleOutputReference getBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference">GoogleGkeBackupBackupPlanBackupScheduleOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `protectedNamespaceCount`<sup>Required</sup> <a name="protectedNamespaceCount" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedNamespaceCount"></a>

```java
public java.lang.Number getProtectedNamespaceCount();
```

- *Type:* java.lang.Number

---

##### `protectedPodCount`<sup>Required</sup> <a name="protectedPodCount" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.protectedPodCount"></a>

```java
public java.lang.Number getProtectedPodCount();
```

- *Type:* java.lang.Number

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicy"></a>

```java
public GoogleGkeBackupBackupPlanRetentionPolicyOutputReference getRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference">GoogleGkeBackupBackupPlanRetentionPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.stateReason"></a>

```java
public java.lang.String getStateReason();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeouts"></a>

```java
public GoogleGkeBackupBackupPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference">GoogleGkeBackupBackupPlanTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `backupConfigInput`<sup>Optional</sup> <a name="backupConfigInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupConfigInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfig getBackupConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---

##### `backupScheduleInput`<sup>Optional</sup> <a name="backupScheduleInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.backupScheduleInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupSchedule getBackupScheduleInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `deactivatedInput`<sup>Optional</sup> <a name="deactivatedInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivatedInput"></a>

```java
public java.lang.Boolean|IResolvable getDeactivatedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `retentionPolicyInput`<sup>Optional</sup> <a name="retentionPolicyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.retentionPolicyInput"></a>

```java
public GoogleGkeBackupBackupPlanRetentionPolicy getRetentionPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.timeoutsInput"></a>

```java
public IResolvable|GoogleGkeBackupBackupPlanTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deactivated"></a>

```java
public java.lang.Boolean|IResolvable getDeactivated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeBackupBackupPlanBackupConfig <a name="GoogleGkeBackupBackupPlanBackupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfig;

GoogleGkeBackupBackupPlanBackupConfig.builder()
//  .allNamespaces(java.lang.Boolean|IResolvable)
//  .encryptionKey(GoogleGkeBackupBackupPlanBackupConfigEncryptionKey)
//  .includeSecrets(java.lang.Boolean|IResolvable)
//  .includeVolumeData(java.lang.Boolean|IResolvable)
//  .permissiveMode(java.lang.Boolean|IResolvable)
//  .selectedApplications(GoogleGkeBackupBackupPlanBackupConfigSelectedApplications)
//  .selectedNamespaceLabels(GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels)
//  .selectedNamespaces(GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.allNamespaces">allNamespaces</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If True, include all namespaced resources. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeSecrets">includeSecrets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeVolumeData">includeVolumeData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.permissiveMode">permissiveMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedApplications">selectedApplications</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | selected_applications block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaceLabels">selectedNamespaceLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | selected_namespace_labels block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaces">selectedNamespaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | selected_namespaces block. |

---

##### `allNamespaces`<sup>Optional</sup> <a name="allNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.allNamespaces"></a>

```java
public java.lang.Boolean|IResolvable getAllNamespaces();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If True, include all namespaced resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#all_namespaces GoogleGkeBackupBackupPlan#all_namespaces}

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.encryptionKey"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigEncryptionKey getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#encryption_key GoogleGkeBackupBackupPlan#encryption_key}

---

##### `includeSecrets`<sup>Optional</sup> <a name="includeSecrets" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeSecrets"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSecrets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag specifies whether Kubernetes Secret resources should be included when they fall into the scope of Backups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#include_secrets GoogleGkeBackupBackupPlan#include_secrets}

---

##### `includeVolumeData`<sup>Optional</sup> <a name="includeVolumeData" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.includeVolumeData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeVolumeData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag specifies whether volume data should be backed up when PVCs are included in the scope of a Backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#include_volume_data GoogleGkeBackupBackupPlan#include_volume_data}

---

##### `permissiveMode`<sup>Optional</sup> <a name="permissiveMode" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.permissiveMode"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag specifies whether Backups will not fail when Backup for GKE detects Kubernetes configuration that is non-standard or requires additional setup to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#permissive_mode GoogleGkeBackupBackupPlan#permissive_mode}

---

##### `selectedApplications`<sup>Optional</sup> <a name="selectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedApplications"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedApplications getSelectedApplications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

selected_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#selected_applications GoogleGkeBackupBackupPlan#selected_applications}

---

##### `selectedNamespaceLabels`<sup>Optional</sup> <a name="selectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaceLabels"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels getSelectedNamespaceLabels();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

selected_namespace_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#selected_namespace_labels GoogleGkeBackupBackupPlan#selected_namespace_labels}

---

##### `selectedNamespaces`<sup>Optional</sup> <a name="selectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig.property.selectedNamespaces"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces getSelectedNamespaces();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

selected_namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#selected_namespaces GoogleGkeBackupBackupPlan#selected_namespaces}

---

### GoogleGkeBackupBackupPlanBackupConfigEncryptionKey <a name="GoogleGkeBackupBackupPlanBackupConfigEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey;

GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.builder()
    .gcpKmsEncryptionKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey">gcpKmsEncryptionKey</a></code> | <code>java.lang.String</code> | Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*. |

---

##### `gcpKmsEncryptionKey`<sup>Required</sup> <a name="gcpKmsEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey.property.gcpKmsEncryptionKey"></a>

```java
public java.lang.String getGcpKmsEncryptionKey();
```

- *Type:* java.lang.String

Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#gcp_kms_encryption_key GoogleGkeBackupBackupPlan#gcp_kms_encryption_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedApplications <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications;

GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.builder()
    .namespacedNames(IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames">namespacedNames</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>></code> | namespaced_names block. |

---

##### `namespacedNames`<sup>Required</sup> <a name="namespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications.property.namespacedNames"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames> getNamespacedNames();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

namespaced_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#namespaced_names GoogleGkeBackupBackupPlan#namespaced_names}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames;

GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name">name</a></code> | <code>java.lang.String</code> | The name of a Kubernetes Resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of a Kubernetes Resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of a Kubernetes Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#namespace GoogleGkeBackupBackupPlan#namespace}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels;

GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.builder()
    .resourceLabels(IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.property.resourceLabels">resourceLabels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>></code> | resource_labels block. |

---

##### `resourceLabels`<sup>Required</sup> <a name="resourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels.property.resourceLabels"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels> getResourceLabels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>>

resource_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#resource_labels GoogleGkeBackupBackupPlan#resource_labels}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels;

GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.key">key</a></code> | <code>java.lang.String</code> | The key of the kubernetes label. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.value">value</a></code> | <code>java.lang.String</code> | The value of the Label. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the kubernetes label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#key GoogleGkeBackupBackupPlan#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the Label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#value GoogleGkeBackupBackupPlan#value}

---

### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces;

GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.builder()
    .namespaces(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | A list of Kubernetes Namespaces. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

A list of Kubernetes Namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#namespaces GoogleGkeBackupBackupPlan#namespaces}

---

### GoogleGkeBackupBackupPlanBackupSchedule <a name="GoogleGkeBackupBackupPlanBackupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupSchedule;

GoogleGkeBackupBackupPlanBackupSchedule.builder()
//  .cronSchedule(java.lang.String)
//  .paused(java.lang.Boolean|IResolvable)
//  .rpoConfig(GoogleGkeBackupBackupPlanBackupScheduleRpoConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.paused">paused</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag denotes whether automatic Backup creation is paused for this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.rpoConfig">rpoConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | rpo_config block. |

---

##### `cronSchedule`<sup>Optional</sup> <a name="cronSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

A standard cron string that defines a repeating schedule for creating Backups via this BackupPlan.

This is mutually exclusive with the rpoConfig field since at most one
schedule can be defined for a BackupPlan.
If this is defined, then backupRetainDays must also be defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#cron_schedule GoogleGkeBackupBackupPlan#cron_schedule}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.paused"></a>

```java
public java.lang.Boolean|IResolvable getPaused();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag denotes whether automatic Backup creation is paused for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#paused GoogleGkeBackupBackupPlan#paused}

---

##### `rpoConfig`<sup>Optional</sup> <a name="rpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule.property.rpoConfig"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfig getRpoConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

rpo_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#rpo_config GoogleGkeBackupBackupPlan#rpo_config}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfig <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig;

GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.builder()
    .targetRpoMinutes(java.lang.Number)
//  .exclusionWindows(IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes">targetRpoMinutes</a></code> | <code>java.lang.Number</code> | Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows">exclusionWindows</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>></code> | exclusion_windows block. |

---

##### `targetRpoMinutes`<sup>Required</sup> <a name="targetRpoMinutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.targetRpoMinutes"></a>

```java
public java.lang.Number getTargetRpoMinutes();
```

- *Type:* java.lang.Number

Defines the target RPO for the BackupPlan in minutes, which means the target maximum data loss in time that is acceptable for this BackupPlan.

This must be
at least 60, i.e., 1 hour, and at most 86400, i.e., 60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#target_rpo_minutes GoogleGkeBackupBackupPlan#target_rpo_minutes}

---

##### `exclusionWindows`<sup>Optional</sup> <a name="exclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig.property.exclusionWindows"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows> getExclusionWindows();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

exclusion_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#exclusion_windows GoogleGkeBackupBackupPlan#exclusion_windows}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows;

GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.builder()
    .duration(java.lang.String)
    .startTime(GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime)
//  .daily(java.lang.Boolean|IResolvable)
//  .daysOfWeek(GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek)
//  .singleOccurrenceDate(GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration">duration</a></code> | <code>java.lang.String</code> | Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | start_time block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily">daily</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The exclusion window occurs every day if set to "True". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | days_of_week block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate">singleOccurrenceDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | single_occurrence_date block. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

Specifies duration of the window in seconds with up to nine fractional digits, terminated by 's'.

Example: "3.5s". Restrictions for duration based on the
recurrence type to allow some time for backup to happen:

* single_occurrence_date:  no restriction
* daily window: duration < 24 hours
* weekly window:

  * days of week includes all seven days of a week: duration < 24 hours
  * all other weekly window: duration < 168 hours (i.e., 24 * 7 hours)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#duration GoogleGkeBackupBackupPlan#duration}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.startTime"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#start_time GoogleGkeBackupBackupPlan#start_time}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daily"></a>

```java
public java.lang.Boolean|IResolvable getDaily();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The exclusion window occurs every day if set to "True".

Specifying this field to "False" is an error.
Only one of singleOccurrenceDate, daily and daysOfWeek may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#daily GoogleGkeBackupBackupPlan#daily}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.daysOfWeek"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek getDaysOfWeek();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

days_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#days_of_week GoogleGkeBackupBackupPlan#days_of_week}

---

##### `singleOccurrenceDate`<sup>Optional</sup> <a name="singleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows.property.singleOccurrenceDate"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate getSingleOccurrenceDate();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

single_occurrence_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#single_occurrence_date GoogleGkeBackupBackupPlan#single_occurrence_date}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;

GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.builder()
//  .daysOfWeek(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#days_of_week GoogleGkeBackupBackupPlan#days_of_week}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;

GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#day GoogleGkeBackupBackupPlan#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#month GoogleGkeBackupBackupPlan#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#year GoogleGkeBackupBackupPlan#year}

---

### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime;

GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#hours GoogleGkeBackupBackupPlan#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#minutes GoogleGkeBackupBackupPlan#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#nanos GoogleGkeBackupBackupPlan#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#seconds GoogleGkeBackupBackupPlan#seconds}

---

### GoogleGkeBackupBackupPlanConfig <a name="GoogleGkeBackupBackupPlanConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanConfig;

GoogleGkeBackupBackupPlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .backupConfig(GoogleGkeBackupBackupPlanBackupConfig)
//  .backupSchedule(GoogleGkeBackupBackupPlanBackupSchedule)
//  .deactivated(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .retentionPolicy(GoogleGkeBackupBackupPlanRetentionPolicy)
//  .timeouts(GoogleGkeBackupBackupPlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The source cluster from which Backups will be created via this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.location">location</a></code> | <code>java.lang.String</code> | The region of the Backup Plan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.name">name</a></code> | <code>java.lang.String</code> | The full name of the BackupPlan Resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupConfig">backupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupSchedule">backupSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | backup_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deactivated">deactivated</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag indicates whether this BackupPlan has been deactivated. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.description">description</a></code> | <code>java.lang.String</code> | User specified descriptive string for this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Description: A set of custom labels supplied by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The source cluster from which Backups will be created via this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#cluster GoogleGkeBackupBackupPlan#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The region of the Backup Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#location GoogleGkeBackupBackupPlan#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The full name of the BackupPlan Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#name GoogleGkeBackupBackupPlan#name}

---

##### `backupConfig`<sup>Optional</sup> <a name="backupConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupConfig"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfig getBackupConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_config GoogleGkeBackupBackupPlan#backup_config}

---

##### `backupSchedule`<sup>Optional</sup> <a name="backupSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.backupSchedule"></a>

```java
public GoogleGkeBackupBackupPlanBackupSchedule getBackupSchedule();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_schedule GoogleGkeBackupBackupPlan#backup_schedule}

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deactivated"></a>

```java
public java.lang.Boolean|IResolvable getDeactivated();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag indicates whether this BackupPlan has been deactivated.

Setting this field to True locks the BackupPlan such that no further updates will be allowed
(except deletes), including the deactivated field itself. It also prevents any new Backups
from being created via this BackupPlan (including scheduled Backups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#deactivated GoogleGkeBackupBackupPlan#deactivated}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#deletion_policy GoogleGkeBackupBackupPlan#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User specified descriptive string for this BackupPlan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#description GoogleGkeBackupBackupPlan#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#id GoogleGkeBackupBackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Description: A set of custom labels supplied by the user.

A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#labels GoogleGkeBackupBackupPlan#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#project GoogleGkeBackupBackupPlan#project}.

---

##### `retentionPolicy`<sup>Optional</sup> <a name="retentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.retentionPolicy"></a>

```java
public GoogleGkeBackupBackupPlanRetentionPolicy getRetentionPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#retention_policy GoogleGkeBackupBackupPlan#retention_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanConfig.property.timeouts"></a>

```java
public GoogleGkeBackupBackupPlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#timeouts GoogleGkeBackupBackupPlan#timeouts}

---

### GoogleGkeBackupBackupPlanRetentionPolicy <a name="GoogleGkeBackupBackupPlanRetentionPolicy" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanRetentionPolicy;

GoogleGkeBackupBackupPlanRetentionPolicy.builder()
//  .backupDeleteLockDays(java.lang.Number)
//  .backupRetainDays(java.lang.Number)
//  .locked(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays">backupDeleteLockDays</a></code> | <code>java.lang.Number</code> | Minimum age for a Backup created via this BackupPlan (in days). |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupRetainDays">backupRetainDays</a></code> | <code>java.lang.Number</code> | The default maximum age of a Backup created via this BackupPlan. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.locked">locked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | This flag denotes whether the retention policy of this BackupPlan is locked. |

---

##### `backupDeleteLockDays`<sup>Optional</sup> <a name="backupDeleteLockDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupDeleteLockDays"></a>

```java
public java.lang.Number getBackupDeleteLockDays();
```

- *Type:* java.lang.Number

Minimum age for a Backup created via this BackupPlan (in days).

Must be an integer value between 0-90 (inclusive).
A Backup created under this BackupPlan will not be deletable
until it reaches Backup's (create time + backup_delete_lock_days).
Updating this field of a BackupPlan does not affect existing Backups.
Backups created after a successful update will inherit this new value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_delete_lock_days GoogleGkeBackupBackupPlan#backup_delete_lock_days}

---

##### `backupRetainDays`<sup>Optional</sup> <a name="backupRetainDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.backupRetainDays"></a>

```java
public java.lang.Number getBackupRetainDays();
```

- *Type:* java.lang.Number

The default maximum age of a Backup created via this BackupPlan.

This field MUST be an integer value >= 0 and <= 365. If specified,
a Backup created under this BackupPlan will be automatically deleted
after its age reaches (createTime + backupRetainDays).
If not specified, Backups created under this BackupPlan will NOT be
subject to automatic deletion. Updating this field does NOT affect
existing Backups under it. Backups created AFTER a successful update
will automatically pick up the new value.
NOTE: backupRetainDays must be >= backupDeleteLockDays.
If cronSchedule is defined, then this must be <= 360 * the creation interval.
If rpo_config is defined, then this must be
<= 360 * targetRpoMinutes/(1440minutes/day)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#backup_retain_days GoogleGkeBackupBackupPlan#backup_retain_days}

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy.property.locked"></a>

```java
public java.lang.Boolean|IResolvable getLocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

This flag denotes whether the retention policy of this BackupPlan is locked.

If set to True, no further update is allowed on this policy, including
the locked field itself.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#locked GoogleGkeBackupBackupPlan#locked}

---

### GoogleGkeBackupBackupPlanTimeouts <a name="GoogleGkeBackupBackupPlanTimeouts" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanTimeouts;

GoogleGkeBackupBackupPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#create GoogleGkeBackupBackupPlan#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#delete GoogleGkeBackupBackupPlan#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#update GoogleGkeBackupBackupPlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#create GoogleGkeBackupBackupPlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#delete GoogleGkeBackupBackupPlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_backup_backup_plan#update GoogleGkeBackupBackupPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference;

new GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput">gcpKmsEncryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey">gcpKmsEncryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gcpKmsEncryptionKeyInput`<sup>Optional</sup> <a name="gcpKmsEncryptionKeyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKeyInput"></a>

```java
public java.lang.String getGcpKmsEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `gcpKmsEncryptionKey`<sup>Required</sup> <a name="gcpKmsEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.gcpKmsEncryptionKey"></a>

```java
public java.lang.String getGcpKmsEncryptionKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---


### GoogleGkeBackupBackupPlanBackupConfigOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigOutputReference;

new GoogleGkeBackupBackupPlanBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications">putSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels">putSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces">putSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces">resetAllNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets">resetIncludeSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData">resetIncludeVolumeData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode">resetPermissiveMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications">resetSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaceLabels">resetSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces">resetSelectedNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionKey` <a name="putEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey"></a>

```java
public void putEncryptionKey(GoogleGkeBackupBackupPlanBackupConfigEncryptionKey value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `putSelectedApplications` <a name="putSelectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications"></a>

```java
public void putSelectedApplications(GoogleGkeBackupBackupPlanBackupConfigSelectedApplications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedApplications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `putSelectedNamespaceLabels` <a name="putSelectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels"></a>

```java
public void putSelectedNamespaceLabels(GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaceLabels.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---

##### `putSelectedNamespaces` <a name="putSelectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces"></a>

```java
public void putSelectedNamespaces(GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.putSelectedNamespaces.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `resetAllNamespaces` <a name="resetAllNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetAllNamespaces"></a>

```java
public void resetAllNamespaces()
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetEncryptionKey"></a>

```java
public void resetEncryptionKey()
```

##### `resetIncludeSecrets` <a name="resetIncludeSecrets" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeSecrets"></a>

```java
public void resetIncludeSecrets()
```

##### `resetIncludeVolumeData` <a name="resetIncludeVolumeData" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetIncludeVolumeData"></a>

```java
public void resetIncludeVolumeData()
```

##### `resetPermissiveMode` <a name="resetPermissiveMode" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetPermissiveMode"></a>

```java
public void resetPermissiveMode()
```

##### `resetSelectedApplications` <a name="resetSelectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedApplications"></a>

```java
public void resetSelectedApplications()
```

##### `resetSelectedNamespaceLabels` <a name="resetSelectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaceLabels"></a>

```java
public void resetSelectedNamespaceLabels()
```

##### `resetSelectedNamespaces` <a name="resetSelectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.resetSelectedNamespaces"></a>

```java
public void resetSelectedNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications">selectedApplications</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabels">selectedNamespaceLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces">selectedNamespaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput">allNamespacesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput">includeSecretsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput">includeVolumeDataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput">permissiveModeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput">selectedApplicationsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabelsInput">selectedNamespaceLabelsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput">selectedNamespacesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces">allNamespaces</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets">includeSecrets</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData">includeVolumeData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode">permissiveMode</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKey"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference getEncryptionKey();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference">GoogleGkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference</a>

---

##### `selectedApplications`<sup>Required</sup> <a name="selectedApplications" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplications"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference getSelectedApplications();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference</a>

---

##### `selectedNamespaceLabels`<sup>Required</sup> <a name="selectedNamespaceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabels"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference getSelectedNamespaceLabels();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference</a>

---

##### `selectedNamespaces`<sup>Required</sup> <a name="selectedNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaces"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference getSelectedNamespaces();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference</a>

---

##### `allNamespacesInput`<sup>Optional</sup> <a name="allNamespacesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespacesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllNamespacesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.encryptionKeyInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigEncryptionKey getEncryptionKeyInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigEncryptionKey">GoogleGkeBackupBackupPlanBackupConfigEncryptionKey</a>

---

##### `includeSecretsInput`<sup>Optional</sup> <a name="includeSecretsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecretsInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSecretsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeVolumeDataInput`<sup>Optional</sup> <a name="includeVolumeDataInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeDataInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeVolumeDataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveModeInput`<sup>Optional</sup> <a name="permissiveModeInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveModeInput"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveModeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `selectedApplicationsInput`<sup>Optional</sup> <a name="selectedApplicationsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedApplicationsInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedApplications getSelectedApplicationsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---

##### `selectedNamespaceLabelsInput`<sup>Optional</sup> <a name="selectedNamespaceLabelsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespaceLabelsInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels getSelectedNamespaceLabelsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---

##### `selectedNamespacesInput`<sup>Optional</sup> <a name="selectedNamespacesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.selectedNamespacesInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces getSelectedNamespacesInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---

##### `allNamespaces`<sup>Required</sup> <a name="allNamespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.allNamespaces"></a>

```java
public java.lang.Boolean|IResolvable getAllNamespaces();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeSecrets`<sup>Required</sup> <a name="includeSecrets" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeSecrets"></a>

```java
public java.lang.Boolean|IResolvable getIncludeSecrets();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `includeVolumeData`<sup>Required</sup> <a name="includeVolumeData" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.includeVolumeData"></a>

```java
public java.lang.Boolean|IResolvable getIncludeVolumeData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `permissiveMode`<sup>Required</sup> <a name="permissiveMode" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.permissiveMode"></a>

```java
public java.lang.Boolean|IResolvable getPermissiveMode();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfig">GoogleGkeBackupBackupPlanBackupConfig</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList;

new GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference;

new GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference;

new GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames">putNamespacedNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespacedNames` <a name="putNamespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames"></a>

```java
public void putNamespacedNames(IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.putNamespacedNames.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames">namespacedNames</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput">namespacedNamesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespacedNames`<sup>Required</sup> <a name="namespacedNames" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNames"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList getNamespacedNames();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList</a>

---

##### `namespacedNamesInput`<sup>Optional</sup> <a name="namespacedNamesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.namespacedNamesInput"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames> getNamespacedNamesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames">GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedApplications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedApplications">GoogleGkeBackupBackupPlanBackupConfigSelectedApplications</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference;

new GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels">putResourceLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResourceLabels` <a name="putResourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels"></a>

```java
public void putResourceLabels(IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.putResourceLabels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabels">resourceLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabelsInput">resourceLabelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceLabels`<sup>Required</sup> <a name="resourceLabels" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabels"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList getResourceLabels();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList</a>

---

##### `resourceLabelsInput`<sup>Optional</sup> <a name="resourceLabelsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.resourceLabelsInput"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels> getResourceLabelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabels</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList;

new GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference;

new GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabelsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaceLabelsResourceLabels</a>

---


### GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference <a name="GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference;

new GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces">namespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespacesInput"></a>

```java
public java.util.List<java.lang.String> getNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.namespaces"></a>

```java
public java.util.List<java.lang.String> getNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces">GoogleGkeBackupBackupPlanBackupConfigSelectedNamespaces</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference;

new GoogleGkeBackupBackupPlanBackupScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig">putRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule">resetCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig">resetRpoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRpoConfig` <a name="putRpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig"></a>

```java
public void putRpoConfig(GoogleGkeBackupBackupPlanBackupScheduleRpoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.putRpoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `resetCronSchedule` <a name="resetCronSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetCronSchedule"></a>

```java
public void resetCronSchedule()
```

##### `resetPaused` <a name="resetPaused" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetRpoConfig` <a name="resetRpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.resetRpoConfig"></a>

```java
public void resetRpoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig">rpoConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput">cronScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput">rpoConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule">cronSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.paused">paused</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rpoConfig`<sup>Required</sup> <a name="rpoConfig" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfig"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference getRpoConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference</a>

---

##### `cronScheduleInput`<sup>Optional</sup> <a name="cronScheduleInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronScheduleInput"></a>

```java
public java.lang.String getCronScheduleInput();
```

- *Type:* java.lang.String

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.pausedInput"></a>

```java
public java.lang.Boolean|IResolvable getPausedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rpoConfigInput`<sup>Optional</sup> <a name="rpoConfigInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.rpoConfigInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfig getRpoConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

---

##### `cronSchedule`<sup>Required</sup> <a name="cronSchedule" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.cronSchedule"></a>

```java
public java.lang.String getCronSchedule();
```

- *Type:* java.lang.String

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.paused"></a>

```java
public java.lang.Boolean|IResolvable getPaused();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupSchedule">GoogleGkeBackupBackupPlanBackupSchedule</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference;

new GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList;

new GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference;

new GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek">putDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate">putSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate">resetSingleOccurrenceDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDaysOfWeek` <a name="putDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek"></a>

```java
public void putDaysOfWeek(GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putDaysOfWeek.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `putSingleOccurrenceDate` <a name="putSingleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate"></a>

```java
public void putSingleOccurrenceDate(GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putSingleOccurrenceDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime"></a>

```java
public void putStartTime(GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `resetDaily` <a name="resetDaily" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaily"></a>

```java
public void resetDaily()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetSingleOccurrenceDate` <a name="resetSingleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.resetSingleOccurrenceDate"></a>

```java
public void resetSingleOccurrenceDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate">singleOccurrenceDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput">dailyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput">singleOccurrenceDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily">daily</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration">duration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeek"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference getDaysOfWeek();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference</a>

---

##### `singleOccurrenceDate`<sup>Required</sup> <a name="singleOccurrenceDate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDate"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference getSingleOccurrenceDate();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTime"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.dailyInput"></a>

```java
public java.lang.Boolean|IResolvable getDailyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daysOfWeekInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek getDaysOfWeekInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.durationInput"></a>

```java
public java.lang.String getDurationInput();
```

- *Type:* java.lang.String

---

##### `singleOccurrenceDateInput`<sup>Optional</sup> <a name="singleOccurrenceDateInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.singleOccurrenceDateInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate getSingleOccurrenceDateInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.startTimeInput"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.daily"></a>

```java
public java.lang.Boolean|IResolvable getDaily();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference;

new GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference;

new GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime</a>

---


### GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference <a name="GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference;

new GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows">putExclusionWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows">resetExclusionWindows</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclusionWindows` <a name="putExclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows"></a>

```java
public void putExclusionWindows(IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.putExclusionWindows.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

---

##### `resetExclusionWindows` <a name="resetExclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.resetExclusionWindows"></a>

```java
public void resetExclusionWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows">exclusionWindows</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput">exclusionWindowsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput">targetRpoMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes">targetRpoMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `exclusionWindows`<sup>Required</sup> <a name="exclusionWindows" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindows"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList getExclusionWindows();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList</a>

---

##### `exclusionWindowsInput`<sup>Optional</sup> <a name="exclusionWindowsInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.exclusionWindowsInput"></a>

```java
public IResolvable|java.util.List<GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows> getExclusionWindowsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows">GoogleGkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows</a>>

---

##### `targetRpoMinutesInput`<sup>Optional</sup> <a name="targetRpoMinutesInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutesInput"></a>

```java
public java.lang.Number getTargetRpoMinutesInput();
```

- *Type:* java.lang.Number

---

##### `targetRpoMinutes`<sup>Required</sup> <a name="targetRpoMinutes" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.targetRpoMinutes"></a>

```java
public java.lang.Number getTargetRpoMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanBackupScheduleRpoConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanBackupScheduleRpoConfig">GoogleGkeBackupBackupPlanBackupScheduleRpoConfig</a>

---


### GoogleGkeBackupBackupPlanRetentionPolicyOutputReference <a name="GoogleGkeBackupBackupPlanRetentionPolicyOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference;

new GoogleGkeBackupBackupPlanRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays">resetBackupDeleteLockDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays">resetBackupRetainDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked">resetLocked</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackupDeleteLockDays` <a name="resetBackupDeleteLockDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupDeleteLockDays"></a>

```java
public void resetBackupDeleteLockDays()
```

##### `resetBackupRetainDays` <a name="resetBackupRetainDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetBackupRetainDays"></a>

```java
public void resetBackupRetainDays()
```

##### `resetLocked` <a name="resetLocked" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.resetLocked"></a>

```java
public void resetLocked()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput">backupDeleteLockDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput">backupRetainDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput">lockedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays">backupDeleteLockDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays">backupRetainDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.locked">locked</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupDeleteLockDaysInput`<sup>Optional</sup> <a name="backupDeleteLockDaysInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDaysInput"></a>

```java
public java.lang.Number getBackupDeleteLockDaysInput();
```

- *Type:* java.lang.Number

---

##### `backupRetainDaysInput`<sup>Optional</sup> <a name="backupRetainDaysInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDaysInput"></a>

```java
public java.lang.Number getBackupRetainDaysInput();
```

- *Type:* java.lang.Number

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.lockedInput"></a>

```java
public java.lang.Boolean|IResolvable getLockedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `backupDeleteLockDays`<sup>Required</sup> <a name="backupDeleteLockDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupDeleteLockDays"></a>

```java
public java.lang.Number getBackupDeleteLockDays();
```

- *Type:* java.lang.Number

---

##### `backupRetainDays`<sup>Required</sup> <a name="backupRetainDays" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.backupRetainDays"></a>

```java
public java.lang.Number getBackupRetainDays();
```

- *Type:* java.lang.Number

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.locked"></a>

```java
public java.lang.Boolean|IResolvable getLocked();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicyOutputReference.property.internalValue"></a>

```java
public GoogleGkeBackupBackupPlanRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanRetentionPolicy">GoogleGkeBackupBackupPlanRetentionPolicy</a>

---


### GoogleGkeBackupBackupPlanTimeoutsOutputReference <a name="GoogleGkeBackupBackupPlanTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_backup_backup_plan.GoogleGkeBackupBackupPlanTimeoutsOutputReference;

new GoogleGkeBackupBackupPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeBackupBackupPlanTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeBackupBackupPlan.GoogleGkeBackupBackupPlanTimeouts">GoogleGkeBackupBackupPlanTimeouts</a>

---



