# `googleSpannerInstancePartition` Submodule <a name="`googleSpannerInstancePartition` Submodule" id="@cdktn/provider-google-beta.googleSpannerInstancePartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstancePartition <a name="GoogleSpannerInstancePartition" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition google_spanner_instance_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .config(java.lang.String)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .name(java.lang.String)
//  .autoscalingConfig(GoogleSpannerInstancePartitionAutoscalingConfig)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .processingUnits(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleSpannerInstancePartitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.config">config</a></code> | <code>java.lang.String</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.config"></a>

- *Type:* java.lang.String

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#config GoogleSpannerInstancePartition#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#display_name GoogleSpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#instance GoogleSpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#name GoogleSpannerInstancePartition#name}

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.autoscalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#autoscaling_config GoogleSpannerInstancePartition#autoscaling_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#deletion_policy GoogleSpannerInstancePartition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count, processing_units,
or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#node_count GoogleSpannerInstancePartition#node_count}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.processingUnits"></a>

- *Type:* java.lang.Number

The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#processing_units GoogleSpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#timeouts GoogleSpannerInstancePartition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putAutoscalingConfig">putAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetAutoscalingConfig">resetAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProcessingUnits">resetProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscalingConfig` <a name="putAutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putAutoscalingConfig"></a>

```java
public void putAutoscalingConfig(GoogleSpannerInstancePartitionAutoscalingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putAutoscalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts"></a>

```java
public void putTimeouts(GoogleSpannerInstancePartitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

---

##### `resetAutoscalingConfig` <a name="resetAutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetAutoscalingConfig"></a>

```java
public void resetAutoscalingConfig()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetId"></a>

```java
public void resetId()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetProcessingUnits` <a name="resetProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProcessingUnits"></a>

```java
public void resetProcessingUnits()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSpannerInstancePartition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartition;

GoogleSpannerInstancePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleSpannerInstancePartition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleSpannerInstancePartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleSpannerInstancePartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleSpannerInstancePartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstancePartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference">GoogleSpannerInstancePartitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfigInput">autoscalingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.configInput">configInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnitsInput">processingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.config">config</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoscalingConfig`<sup>Required</sup> <a name="autoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfig"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigOutputReference getAutoscalingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeouts"></a>

```java
public GoogleSpannerInstancePartitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference">GoogleSpannerInstancePartitionTimeoutsOutputReference</a>

---

##### `autoscalingConfigInput`<sup>Optional</sup> <a name="autoscalingConfigInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.autoscalingConfigInput"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfig getAutoscalingConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.configInput"></a>

```java
public java.lang.String getConfigInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `processingUnitsInput`<sup>Optional</sup> <a name="processingUnitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnitsInput"></a>

```java
public java.lang.Number getProcessingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.timeoutsInput"></a>

```java
public IResolvable|GoogleSpannerInstancePartitionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `processingUnits`<sup>Required</sup> <a name="processingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.processingUnits"></a>

```java
public java.lang.Number getProcessingUnits();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstancePartitionAutoscalingConfig <a name="GoogleSpannerInstancePartitionAutoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionAutoscalingConfig;

GoogleSpannerInstancePartitionAutoscalingConfig.builder()
//  .autoscalingLimits(GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits)
//  .autoscalingTargets(GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | autoscaling_limits block. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | autoscaling_targets block. |

---

##### `autoscalingLimits`<sup>Optional</sup> <a name="autoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingLimits"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits getAutoscalingLimits();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

autoscaling_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#autoscaling_limits GoogleSpannerInstancePartition#autoscaling_limits}

---

##### `autoscalingTargets`<sup>Optional</sup> <a name="autoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig.property.autoscalingTargets"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets getAutoscalingTargets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

autoscaling_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#autoscaling_targets GoogleSpannerInstancePartition#autoscaling_targets}

---

### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits;

GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.builder()
//  .maxNodes(java.lang.Number)
//  .maxProcessingUnits(java.lang.Number)
//  .minNodes(java.lang.Number)
//  .minProcessingUnits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | Specifies maximum number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>java.lang.Number</code> | Specifies maximum number of processing units allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | Specifies number of nodes allocated to the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits">minProcessingUnits</a></code> | <code>java.lang.Number</code> | Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000. |

---

##### `maxNodes`<sup>Optional</sup> <a name="maxNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

Specifies maximum number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to min_nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#max_nodes GoogleSpannerInstancePartition#max_nodes}

---

##### `maxProcessingUnits`<sup>Optional</sup> <a name="maxProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.maxProcessingUnits"></a>

```java
public java.lang.Number getMaxProcessingUnits();
```

- *Type:* java.lang.Number

Specifies maximum number of processing units allocated to the instance partition.

If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#max_processing_units GoogleSpannerInstancePartition#max_processing_units}

---

##### `minNodes`<sup>Optional</sup> <a name="minNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

Specifies number of nodes allocated to the instance partition.

If set, this number
should be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#min_nodes GoogleSpannerInstancePartition#min_nodes}

---

##### `minProcessingUnits`<sup>Optional</sup> <a name="minProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits.property.minProcessingUnits"></a>

```java
public java.lang.Number getMinProcessingUnits();
```

- *Type:* java.lang.Number

Specifies minimum number of processing units allocated to the instance partition. If set, this number should be multiples of 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#min_processing_units GoogleSpannerInstancePartition#min_processing_units}

---

### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets;

GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.builder()
//  .highPriorityCpuUtilizationPercent(java.lang.Number)
//  .storageUtilizationPercent(java.lang.Number)
//  .totalCpuUtilizationPercent(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>java.lang.Number</code> | Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>java.lang.Number</code> | Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent">totalCpuUtilizationPercent</a></code> | <code>java.lang.Number</code> | Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition. |

---

##### `highPriorityCpuUtilizationPercent`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.highPriorityCpuUtilizationPercent"></a>

```java
public java.lang.Number getHighPriorityCpuUtilizationPercent();
```

- *Type:* java.lang.Number

Specifies the target high priority cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#high_priority_cpu_utilization_percent GoogleSpannerInstancePartition#high_priority_cpu_utilization_percent}

---

##### `storageUtilizationPercent`<sup>Optional</sup> <a name="storageUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.storageUtilizationPercent"></a>

```java
public java.lang.Number getStorageUtilizationPercent();
```

- *Type:* java.lang.Number

Specifies the target storage utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#storage_utilization_percent GoogleSpannerInstancePartition#storage_utilization_percent}

---

##### `totalCpuUtilizationPercent`<sup>Optional</sup> <a name="totalCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets.property.totalCpuUtilizationPercent"></a>

```java
public java.lang.Number getTotalCpuUtilizationPercent();
```

- *Type:* java.lang.Number

Specifies the target total cpu utilization percentage that the autoscaler should be trying to achieve for the instance partition.

This number is on a scale from 0 (no utilization) to 100 (full utilization). The valid range is [10, 90] inclusive.
If not specified or set to 0, the autoscaler will skip scaling based on total cpu utilization.
The value should be higher than high_priority_cpu_utilization_percent if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#total_cpu_utilization_percent GoogleSpannerInstancePartition#total_cpu_utilization_percent}

---

### GoogleSpannerInstancePartitionConfig <a name="GoogleSpannerInstancePartitionConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionConfig;

GoogleSpannerInstancePartitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .config(java.lang.String)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .name(java.lang.String)
//  .autoscalingConfig(GoogleSpannerInstancePartitionAutoscalingConfig)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .processingUnits(java.lang.Number)
//  .project(java.lang.String)
//  .timeouts(GoogleSpannerInstancePartitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.config">config</a></code> | <code>java.lang.String</code> | The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The descriptive name for this instance partition as it appears in UIs. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The instance to create the instance partition in. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.name">name</a></code> | <code>java.lang.String</code> | A unique identifier for the instance partition, which cannot be changed after the instance partition is created. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.autoscalingConfig">autoscalingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a></code> | autoscaling_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes allocated to this instance partition. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.processingUnits">processingUnits</a></code> | <code>java.lang.Number</code> | The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.config"></a>

```java
public java.lang.String getConfig();
```

- *Type:* java.lang.String

The name of the instance partition's configuration (similar to a region) which defines the geographic placement and replication of data in this instance partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#config GoogleSpannerInstancePartition#config}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The descriptive name for this instance partition as it appears in UIs.

Must be unique per project and between 4 and 30 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#display_name GoogleSpannerInstancePartition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The instance to create the instance partition in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#instance GoogleSpannerInstancePartition#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A unique identifier for the instance partition, which cannot be changed after the instance partition is created.

The name must be between 2 and 64 characters
and match the regular expression [a-z][a-z0-9\-]{0,61}[a-z0-9].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#name GoogleSpannerInstancePartition#name}

---

##### `autoscalingConfig`<sup>Optional</sup> <a name="autoscalingConfig" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.autoscalingConfig"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfig getAutoscalingConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

autoscaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#autoscaling_config GoogleSpannerInstancePartition#autoscaling_config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#deletion_policy GoogleSpannerInstancePartition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#id GoogleSpannerInstancePartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes allocated to this instance partition.

One node equals
1000 processing units. Exactly one of either node_count, processing_units,
or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#node_count GoogleSpannerInstancePartition#node_count}

---

##### `processingUnits`<sup>Optional</sup> <a name="processingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.processingUnits"></a>

```java
public java.lang.Number getProcessingUnits();
```

- *Type:* java.lang.Number

The number of processing units allocated to this instance partition. Exactly one of either node_count, processing_units, or autoscaling_config must be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#processing_units GoogleSpannerInstancePartition#processing_units}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#project GoogleSpannerInstancePartition#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionConfig.property.timeouts"></a>

```java
public GoogleSpannerInstancePartitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#timeouts GoogleSpannerInstancePartition#timeouts}

---

### GoogleSpannerInstancePartitionTimeouts <a name="GoogleSpannerInstancePartitionTimeouts" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionTimeouts;

GoogleSpannerInstancePartitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#create GoogleSpannerInstancePartition#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#delete GoogleSpannerInstancePartition#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#update GoogleSpannerInstancePartition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#create GoogleSpannerInstancePartition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#delete GoogleSpannerInstancePartition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_spanner_instance_partition#update GoogleSpannerInstancePartition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference;

new GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes">resetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits">resetMaxProcessingUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes">resetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits">resetMinProcessingUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxNodes` <a name="resetMaxNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxNodes"></a>

```java
public void resetMaxNodes()
```

##### `resetMaxProcessingUnits` <a name="resetMaxProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMaxProcessingUnits"></a>

```java
public void resetMaxProcessingUnits()
```

##### `resetMinNodes` <a name="resetMinNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinNodes"></a>

```java
public void resetMinNodes()
```

##### `resetMinProcessingUnits` <a name="resetMinProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.resetMinProcessingUnits"></a>

```java
public void resetMinProcessingUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput">maxNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput">maxProcessingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput">minNodesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput">minProcessingUnitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits">maxProcessingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits">minProcessingUnits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxNodesInput`<sup>Optional</sup> <a name="maxNodesInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodesInput"></a>

```java
public java.lang.Number getMaxNodesInput();
```

- *Type:* java.lang.Number

---

##### `maxProcessingUnitsInput`<sup>Optional</sup> <a name="maxProcessingUnitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnitsInput"></a>

```java
public java.lang.Number getMaxProcessingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `minNodesInput`<sup>Optional</sup> <a name="minNodesInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodesInput"></a>

```java
public java.lang.Number getMinNodesInput();
```

- *Type:* java.lang.Number

---

##### `minProcessingUnitsInput`<sup>Optional</sup> <a name="minProcessingUnitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnitsInput"></a>

```java
public java.lang.Number getMinProcessingUnitsInput();
```

- *Type:* java.lang.Number

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `maxProcessingUnits`<sup>Required</sup> <a name="maxProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.maxProcessingUnits"></a>

```java
public java.lang.Number getMaxProcessingUnits();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `minProcessingUnits`<sup>Required</sup> <a name="minProcessingUnits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.minProcessingUnits"></a>

```java
public java.lang.Number getMinProcessingUnits();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---


### GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference <a name="GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference;

new GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent">resetHighPriorityCpuUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent">resetStorageUtilizationPercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent">resetTotalCpuUtilizationPercent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHighPriorityCpuUtilizationPercent` <a name="resetHighPriorityCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetHighPriorityCpuUtilizationPercent"></a>

```java
public void resetHighPriorityCpuUtilizationPercent()
```

##### `resetStorageUtilizationPercent` <a name="resetStorageUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetStorageUtilizationPercent"></a>

```java
public void resetStorageUtilizationPercent()
```

##### `resetTotalCpuUtilizationPercent` <a name="resetTotalCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.resetTotalCpuUtilizationPercent"></a>

```java
public void resetTotalCpuUtilizationPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput">highPriorityCpuUtilizationPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput">storageUtilizationPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput">totalCpuUtilizationPercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent">highPriorityCpuUtilizationPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent">storageUtilizationPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent">totalCpuUtilizationPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `highPriorityCpuUtilizationPercentInput`<sup>Optional</sup> <a name="highPriorityCpuUtilizationPercentInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercentInput"></a>

```java
public java.lang.Number getHighPriorityCpuUtilizationPercentInput();
```

- *Type:* java.lang.Number

---

##### `storageUtilizationPercentInput`<sup>Optional</sup> <a name="storageUtilizationPercentInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercentInput"></a>

```java
public java.lang.Number getStorageUtilizationPercentInput();
```

- *Type:* java.lang.Number

---

##### `totalCpuUtilizationPercentInput`<sup>Optional</sup> <a name="totalCpuUtilizationPercentInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercentInput"></a>

```java
public java.lang.Number getTotalCpuUtilizationPercentInput();
```

- *Type:* java.lang.Number

---

##### `highPriorityCpuUtilizationPercent`<sup>Required</sup> <a name="highPriorityCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.highPriorityCpuUtilizationPercent"></a>

```java
public java.lang.Number getHighPriorityCpuUtilizationPercent();
```

- *Type:* java.lang.Number

---

##### `storageUtilizationPercent`<sup>Required</sup> <a name="storageUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.storageUtilizationPercent"></a>

```java
public java.lang.Number getStorageUtilizationPercent();
```

- *Type:* java.lang.Number

---

##### `totalCpuUtilizationPercent`<sup>Required</sup> <a name="totalCpuUtilizationPercent" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.totalCpuUtilizationPercent"></a>

```java
public java.lang.Number getTotalCpuUtilizationPercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---


### GoogleSpannerInstancePartitionAutoscalingConfigOutputReference <a name="GoogleSpannerInstancePartitionAutoscalingConfigOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference;

new GoogleSpannerInstancePartitionAutoscalingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits">putAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets">putAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits">resetAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets">resetAutoscalingTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscalingLimits` <a name="putAutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits"></a>

```java
public void putAutoscalingLimits(GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `putAutoscalingTargets` <a name="putAutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets"></a>

```java
public void putAutoscalingTargets(GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.putAutoscalingTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `resetAutoscalingLimits` <a name="resetAutoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingLimits"></a>

```java
public void resetAutoscalingLimits()
```

##### `resetAutoscalingTargets` <a name="resetAutoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.resetAutoscalingTargets"></a>

```java
public void resetAutoscalingTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits">autoscalingLimits</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets">autoscalingTargets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput">autoscalingLimitsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput">autoscalingTargetsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscalingLimits`<sup>Required</sup> <a name="autoscalingLimits" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimits"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference getAutoscalingLimits();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimitsOutputReference</a>

---

##### `autoscalingTargets`<sup>Required</sup> <a name="autoscalingTargets" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargets"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference getAutoscalingTargets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargetsOutputReference</a>

---

##### `autoscalingLimitsInput`<sup>Optional</sup> <a name="autoscalingLimitsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingLimitsInput"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits getAutoscalingLimitsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingLimits</a>

---

##### `autoscalingTargetsInput`<sup>Optional</sup> <a name="autoscalingTargetsInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.autoscalingTargetsInput"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets getAutoscalingTargetsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets">GoogleSpannerInstancePartitionAutoscalingConfigAutoscalingTargets</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfigOutputReference.property.internalValue"></a>

```java
public GoogleSpannerInstancePartitionAutoscalingConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionAutoscalingConfig">GoogleSpannerInstancePartitionAutoscalingConfig</a>

---


### GoogleSpannerInstancePartitionTimeoutsOutputReference <a name="GoogleSpannerInstancePartitionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_spanner_instance_partition.GoogleSpannerInstancePartitionTimeoutsOutputReference;

new GoogleSpannerInstancePartitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleSpannerInstancePartitionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleSpannerInstancePartition.GoogleSpannerInstancePartitionTimeouts">GoogleSpannerInstancePartitionTimeouts</a>

---



