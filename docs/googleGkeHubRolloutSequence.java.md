# `googleGkeHubRolloutSequence` Submodule <a name="`googleGkeHubRolloutSequence` Submodule" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubRolloutSequence <a name="GoogleGkeHubRolloutSequence" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequence;

GoogleGkeHubRolloutSequence.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rolloutSequenceId(java.lang.String)
    .stages(IResolvable|java.util.List<GoogleGkeHubRolloutSequenceStages>)
//  .autoUpgradeConfig(GoogleGkeHubRolloutSequenceAutoUpgradeConfig)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ignoredClustersSelector(GoogleGkeHubRolloutSequenceIgnoredClustersSelector)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeHubRolloutSequenceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId">rolloutSequenceId</a></code> | <code>java.lang.String</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>></code> | stages block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.rolloutSequenceId"></a>

- *Type:* java.lang.String

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#rollout_sequence_id GoogleGkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.stages"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#stages GoogleGkeHubRolloutSequence#stages}

---

##### `autoUpgradeConfig`<sup>Optional</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.autoUpgradeConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#auto_upgrade_config GoogleGkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#deletion_policy GoogleGkeHubRolloutSequence#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#display_name GoogleGkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredClustersSelector`<sup>Optional</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.ignoredClustersSelector"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#ignored_clusters_selector GoogleGkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#labels GoogleGkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#timeouts GoogleGkeHubRolloutSequence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig">putAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector">putIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages">putStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig">resetAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector">resetIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoUpgradeConfig` <a name="putAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```java
public void putAutoUpgradeConfig(GoogleGkeHubRolloutSequenceAutoUpgradeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `putIgnoredClustersSelector` <a name="putIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```java
public void putIgnoredClustersSelector(GoogleGkeHubRolloutSequenceIgnoredClustersSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `putStages` <a name="putStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages"></a>

```java
public void putStages(IResolvable|java.util.List<GoogleGkeHubRolloutSequenceStages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts"></a>

```java
public void putTimeouts(GoogleGkeHubRolloutSequenceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `resetAutoUpgradeConfig` <a name="resetAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```java
public void resetAutoUpgradeConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoredClustersSelector` <a name="resetIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```java
public void resetIgnoredClustersSelector()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequence;

GoogleGkeHubRolloutSequence.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequence;

GoogleGkeHubRolloutSequence.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequence;

GoogleGkeHubRolloutSequence.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequence;

GoogleGkeHubRolloutSequence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeHubRolloutSequence.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeHubRolloutSequence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages">stages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput">autoUpgradeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput">ignoredClustersSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput">rolloutSequenceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput">stagesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoUpgradeConfig`<sup>Required</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference getAutoUpgradeConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `ignoredClustersSelector`<sup>Required</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```java
public GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference getIgnoredClustersSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages"></a>

```java
public GoogleGkeHubRolloutSequenceStagesList getStages();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts"></a>

```java
public GoogleGkeHubRolloutSequenceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `autoUpgradeConfigInput`<sup>Optional</sup> <a name="autoUpgradeConfigInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfig getAutoUpgradeConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoredClustersSelectorInput`<sup>Optional</sup> <a name="ignoredClustersSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```java
public GoogleGkeHubRolloutSequenceIgnoredClustersSelector getIgnoredClustersSelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `rolloutSequenceIdInput`<sup>Optional</sup> <a name="rolloutSequenceIdInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```java
public java.lang.String getRolloutSequenceIdInput();
```

- *Type:* java.lang.String

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput"></a>

```java
public IResolvable|java.util.List<GoogleGkeHubRolloutSequenceStages> getStagesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput"></a>

```java
public IResolvable|GoogleGkeHubRolloutSequenceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId"></a>

```java
public java.lang.String getRolloutSequenceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfig <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig;

GoogleGkeHubRolloutSequenceAutoUpgradeConfig.builder()
//  .rolloutCreationScope(GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `rolloutCreationScope`<sup>Optional</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope getRolloutCreationScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#rollout_creation_scope GoogleGkeHubRolloutSequence#rollout_creation_scope}

---

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope;

GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.builder()
//  .upgradeTypes(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">upgradeTypes</a></code> | <code>java.util.List<java.lang.String></code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `upgradeTypes`<sup>Optional</sup> <a name="upgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```java
public java.util.List<java.lang.String> getUpgradeTypes();
```

- *Type:* java.util.List<java.lang.String>

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#upgrade_types GoogleGkeHubRolloutSequence#upgrade_types}

---

### GoogleGkeHubRolloutSequenceConfig <a name="GoogleGkeHubRolloutSequenceConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceConfig;

GoogleGkeHubRolloutSequenceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rolloutSequenceId(java.lang.String)
    .stages(IResolvable|java.util.List<GoogleGkeHubRolloutSequenceStages>)
//  .autoUpgradeConfig(GoogleGkeHubRolloutSequenceAutoUpgradeConfig)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .ignoredClustersSelector(GoogleGkeHubRolloutSequenceIgnoredClustersSelector)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeHubRolloutSequenceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId">rolloutSequenceId</a></code> | <code>java.lang.String</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages">stages</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>></code> | stages block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig">autoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector">ignoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rolloutSequenceId`<sup>Required</sup> <a name="rolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```java
public java.lang.String getRolloutSequenceId();
```

- *Type:* java.lang.String

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#rollout_sequence_id GoogleGkeHubRolloutSequence#rollout_sequence_id}

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages"></a>

```java
public IResolvable|java.util.List<GoogleGkeHubRolloutSequenceStages> getStages();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>>

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#stages GoogleGkeHubRolloutSequence#stages}

---

##### `autoUpgradeConfig`<sup>Optional</sup> <a name="autoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfig getAutoUpgradeConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#auto_upgrade_config GoogleGkeHubRolloutSequence#auto_upgrade_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#deletion_policy GoogleGkeHubRolloutSequence#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#display_name GoogleGkeHubRolloutSequence#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoredClustersSelector`<sup>Optional</sup> <a name="ignoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```java
public GoogleGkeHubRolloutSequenceIgnoredClustersSelector getIgnoredClustersSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#ignored_clusters_selector GoogleGkeHubRolloutSequence#ignored_clusters_selector}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#labels GoogleGkeHubRolloutSequence#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts"></a>

```java
public GoogleGkeHubRolloutSequenceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#timeouts GoogleGkeHubRolloutSequence#timeouts}

---

### GoogleGkeHubRolloutSequenceIgnoredClustersSelector <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector;

GoogleGkeHubRolloutSequenceIgnoredClustersSelector.builder()
    .labelSelector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceStages <a name="GoogleGkeHubRolloutSequenceStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceStages;

GoogleGkeHubRolloutSequenceStages.builder()
    .fleetProjects(java.util.List<java.lang.String>)
//  .clusterSelector(GoogleGkeHubRolloutSequenceStagesClusterSelector)
//  .soakDuration(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects">fleetProjects</a></code> | <code>java.util.List<java.lang.String></code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration">soakDuration</a></code> | <code>java.lang.String</code> | Soak time after upgrading all the clusters in the stage, specified in seconds. |

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects"></a>

```java
public java.util.List<java.lang.String> getFleetProjects();
```

- *Type:* java.util.List<java.lang.String>

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#fleet_projects GoogleGkeHubRolloutSequence#fleet_projects}

---

##### `clusterSelector`<sup>Optional</sup> <a name="clusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector"></a>

```java
public GoogleGkeHubRolloutSequenceStagesClusterSelector getClusterSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#cluster_selector GoogleGkeHubRolloutSequence#cluster_selector}

---

##### `soakDuration`<sup>Optional</sup> <a name="soakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration"></a>

```java
public java.lang.String getSoakDuration();
```

- *Type:* java.lang.String

Soak time after upgrading all the clusters in the stage, specified in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#soak_duration GoogleGkeHubRolloutSequence#soak_duration}

---

### GoogleGkeHubRolloutSequenceStagesClusterSelector <a name="GoogleGkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceStagesClusterSelector;

GoogleGkeHubRolloutSequenceStagesClusterSelector.builder()
    .labelSelector(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceTimeouts <a name="GoogleGkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceTimeouts;

GoogleGkeHubRolloutSequenceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference;

new GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">putRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">resetRolloutCreationScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRolloutCreationScope` <a name="putRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```java
public void putRolloutCreationScope(GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `resetRolloutCreationScope` <a name="resetRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```java
public void resetRolloutCreationScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">rolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">rolloutCreationScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rolloutCreationScope`<sup>Required</sup> <a name="rolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference getRolloutCreationScope();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `rolloutCreationScopeInput`<sup>Optional</sup> <a name="rolloutCreationScopeInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope getRolloutCreationScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference;

new GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">resetUpgradeTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpgradeTypes` <a name="resetUpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```java
public void resetUpgradeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">upgradeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">upgradeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `upgradeTypesInput`<sup>Optional</sup> <a name="upgradeTypesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```java
public java.util.List<java.lang.String> getUpgradeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `upgradeTypes`<sup>Required</sup> <a name="upgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```java
public java.util.List<java.lang.String> getUpgradeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference;

new GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```java
public java.lang.String getLabelSelectorInput();
```

- *Type:* java.lang.String

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubRolloutSequenceIgnoredClustersSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference;

new GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">labelSelectorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">labelSelector</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelSelectorInput`<sup>Optional</sup> <a name="labelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```java
public java.lang.String getLabelSelectorInput();
```

- *Type:* java.lang.String

---

##### `labelSelector`<sup>Required</sup> <a name="labelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```java
public java.lang.String getLabelSelector();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```java
public GoogleGkeHubRolloutSequenceStagesClusterSelector getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesList <a name="GoogleGkeHubRolloutSequenceStagesList" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceStagesList;

new GoogleGkeHubRolloutSequenceStagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get"></a>

```java
public GoogleGkeHubRolloutSequenceStagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleGkeHubRolloutSequenceStages> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>>

---


### GoogleGkeHubRolloutSequenceStagesOutputReference <a name="GoogleGkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceStagesOutputReference;

new GoogleGkeHubRolloutSequenceStagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector">putClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">resetClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">resetSoakDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClusterSelector` <a name="putClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```java
public void putClusterSelector(GoogleGkeHubRolloutSequenceStagesClusterSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `resetClusterSelector` <a name="resetClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```java
public void resetClusterSelector()
```

##### `resetSoakDuration` <a name="resetSoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```java
public void resetSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">clusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">clusterSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">fleetProjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">soakDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">fleetProjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration">soakDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterSelector`<sup>Required</sup> <a name="clusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```java
public GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference getClusterSelector();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `clusterSelectorInput`<sup>Optional</sup> <a name="clusterSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```java
public GoogleGkeHubRolloutSequenceStagesClusterSelector getClusterSelectorInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `fleetProjectsInput`<sup>Optional</sup> <a name="fleetProjectsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```java
public java.util.List<java.lang.String> getFleetProjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `soakDurationInput`<sup>Optional</sup> <a name="soakDurationInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```java
public java.lang.String getSoakDurationInput();
```

- *Type:* java.lang.String

---

##### `fleetProjects`<sup>Required</sup> <a name="fleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```java
public java.util.List<java.lang.String> getFleetProjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `soakDuration`<sup>Required</sup> <a name="soakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```java
public java.lang.String getSoakDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeHubRolloutSequenceStages getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>

---


### GoogleGkeHubRolloutSequenceTimeoutsOutputReference <a name="GoogleGkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gke_hub_rollout_sequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference;

new GoogleGkeHubRolloutSequenceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeHubRolloutSequenceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---



