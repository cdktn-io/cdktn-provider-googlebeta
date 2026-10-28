# `googleBigtableMemoryLayer` Submodule <a name="`googleBigtableMemoryLayer` Submodule" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableMemoryLayer <a name="GoogleBigtableMemoryLayer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer google_bigtable_memory_layer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayer;

GoogleBigtableMemoryLayer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .instance(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigtableMemoryLayerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The ID of the cluster to enable the memory layer on. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance to enable the memory layer within. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#id GoogleBigtableMemoryLayer#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#project GoogleBigtableMemoryLayer#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The ID of the cluster to enable the memory layer on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#cluster GoogleBigtableMemoryLayer#cluster}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

The name of the instance to enable the memory layer within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#instance GoogleBigtableMemoryLayer#instance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#deletion_policy GoogleBigtableMemoryLayer#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#id GoogleBigtableMemoryLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#project GoogleBigtableMemoryLayer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#timeouts GoogleBigtableMemoryLayer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.putTimeouts"></a>

```java
public void putTimeouts(GoogleBigtableMemoryLayerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigtableMemoryLayer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayer;

GoogleBigtableMemoryLayer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayer;

GoogleBigtableMemoryLayer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayer;

GoogleBigtableMemoryLayer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayer;

GoogleBigtableMemoryLayer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleBigtableMemoryLayer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleBigtableMemoryLayer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleBigtableMemoryLayer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleBigtableMemoryLayer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigtableMemoryLayer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.memoryConfig">memoryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList">GoogleBigtableMemoryLayerMemoryConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference">GoogleBigtableMemoryLayerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `memoryConfig`<sup>Required</sup> <a name="memoryConfig" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.memoryConfig"></a>

```java
public GoogleBigtableMemoryLayerMemoryConfigList getMemoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList">GoogleBigtableMemoryLayerMemoryConfigList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeouts"></a>

```java
public GoogleBigtableMemoryLayerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference">GoogleBigtableMemoryLayerTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.timeoutsInput"></a>

```java
public IResolvable|GoogleBigtableMemoryLayerTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableMemoryLayerConfig <a name="GoogleBigtableMemoryLayerConfig" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayerConfig;

GoogleBigtableMemoryLayerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .instance(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleBigtableMemoryLayerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The ID of the cluster to enable the memory layer on. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | The name of the instance to enable the memory layer within. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#id GoogleBigtableMemoryLayer#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#project GoogleBigtableMemoryLayer#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The ID of the cluster to enable the memory layer on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#cluster GoogleBigtableMemoryLayer#cluster}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

The name of the instance to enable the memory layer within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#instance GoogleBigtableMemoryLayer#instance}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#deletion_policy GoogleBigtableMemoryLayer#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#id GoogleBigtableMemoryLayer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#project GoogleBigtableMemoryLayer#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerConfig.property.timeouts"></a>

```java
public GoogleBigtableMemoryLayerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#timeouts GoogleBigtableMemoryLayer#timeouts}

---

### GoogleBigtableMemoryLayerMemoryConfig <a name="GoogleBigtableMemoryLayerMemoryConfig" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayerMemoryConfig;

GoogleBigtableMemoryLayerMemoryConfig.builder()
    .build();
```


### GoogleBigtableMemoryLayerTimeouts <a name="GoogleBigtableMemoryLayerTimeouts" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayerTimeouts;

GoogleBigtableMemoryLayerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#create GoogleBigtableMemoryLayer#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#delete GoogleBigtableMemoryLayer#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#create GoogleBigtableMemoryLayer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_bigtable_memory_layer#delete GoogleBigtableMemoryLayer#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableMemoryLayerMemoryConfigList <a name="GoogleBigtableMemoryLayerMemoryConfigList" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayerMemoryConfigList;

new GoogleBigtableMemoryLayerMemoryConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.get"></a>

```java
public GoogleBigtableMemoryLayerMemoryConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleBigtableMemoryLayerMemoryConfigOutputReference <a name="GoogleBigtableMemoryLayerMemoryConfigOutputReference" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayerMemoryConfigOutputReference;

new GoogleBigtableMemoryLayerMemoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.storageSizeGib">storageSizeGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig">GoogleBigtableMemoryLayerMemoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageSizeGib`<sup>Required</sup> <a name="storageSizeGib" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.storageSizeGib"></a>

```java
public java.lang.Number getStorageSizeGib();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfigOutputReference.property.internalValue"></a>

```java
public GoogleBigtableMemoryLayerMemoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerMemoryConfig">GoogleBigtableMemoryLayerMemoryConfig</a>

---


### GoogleBigtableMemoryLayerTimeoutsOutputReference <a name="GoogleBigtableMemoryLayerTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_bigtable_memory_layer.GoogleBigtableMemoryLayerTimeoutsOutputReference;

new GoogleBigtableMemoryLayerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleBigtableMemoryLayerTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigtableMemoryLayer.GoogleBigtableMemoryLayerTimeouts">GoogleBigtableMemoryLayerTimeouts</a>

---



