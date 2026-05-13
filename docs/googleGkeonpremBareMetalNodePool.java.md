# `googleGkeonpremBareMetalNodePool` Submodule <a name="`googleGkeonpremBareMetalNodePool` Submodule" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremBareMetalNodePool <a name="GoogleGkeonpremBareMetalNodePool" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool google_gkeonprem_bare_metal_node_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePool;

GoogleGkeonpremBareMetalNodePool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bareMetalCluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .nodePoolConfig(GoogleGkeonpremBareMetalNodePoolNodePoolConfig)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeonpremBareMetalNodePoolTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.bareMetalCluster">bareMetalCluster</a></code> | <code>java.lang.String</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The bare metal node pool name. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#id GoogleGkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#project GoogleGkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.bareMetalCluster"></a>

- *Type:* java.lang.String

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#bare_metal_cluster GoogleGkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#location GoogleGkeonpremBareMetalNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#name GoogleGkeonpremBareMetalNodePool#name}

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.nodePoolConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#node_pool_config GoogleGkeonpremBareMetalNodePool#node_pool_config}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#annotations GoogleGkeonpremBareMetalNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#display_name GoogleGkeonpremBareMetalNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#id GoogleGkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#project GoogleGkeonpremBareMetalNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#timeouts GoogleGkeonpremBareMetalNodePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putNodePoolConfig">putNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNodePoolConfig` <a name="putNodePoolConfig" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putNodePoolConfig"></a>

```java
public void putNodePoolConfig(GoogleGkeonpremBareMetalNodePoolNodePoolConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putTimeouts"></a>

```java
public void putTimeouts(GoogleGkeonpremBareMetalNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeonpremBareMetalNodePool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePool;

GoogleGkeonpremBareMetalNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePool;

GoogleGkeonpremBareMetalNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePool;

GoogleGkeonpremBareMetalNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePool;

GoogleGkeonpremBareMetalNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleGkeonpremBareMetalNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleGkeonpremBareMetalNodePool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleGkeonpremBareMetalNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleGkeonpremBareMetalNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremBareMetalNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.deleteTime">deleteTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.reconciling">reconciling</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.status">status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList">GoogleGkeonpremBareMetalNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference">GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalClusterInput">bareMetalClusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfigInput">nodePoolConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalCluster">bareMetalCluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleteTime`<sup>Required</sup> <a name="deleteTime" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.deleteTime"></a>

```java
public java.lang.String getDeleteTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfig"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference getNodePoolConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.status"></a>

```java
public GoogleGkeonpremBareMetalNodePoolStatusList getStatus();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList">GoogleGkeonpremBareMetalNodePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeouts"></a>

```java
public GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference">GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bareMetalClusterInput`<sup>Optional</sup> <a name="bareMetalClusterInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalClusterInput"></a>

```java
public java.lang.String getBareMetalClusterInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodePoolConfigInput`<sup>Optional</sup> <a name="nodePoolConfigInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfigInput"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfig getNodePoolConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeoutsInput"></a>

```java
public IResolvable|GoogleGkeonpremBareMetalNodePoolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalCluster"></a>

```java
public java.lang.String getBareMetalCluster();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremBareMetalNodePoolConfig <a name="GoogleGkeonpremBareMetalNodePoolConfig" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolConfig;

GoogleGkeonpremBareMetalNodePoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bareMetalCluster(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .nodePoolConfig(GoogleGkeonpremBareMetalNodePoolNodePoolConfig)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleGkeonpremBareMetalNodePoolTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.bareMetalCluster">bareMetalCluster</a></code> | <code>java.lang.String</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | The bare metal node pool name. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.nodePoolConfig">nodePoolConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#id GoogleGkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#project GoogleGkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bareMetalCluster`<sup>Required</sup> <a name="bareMetalCluster" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.bareMetalCluster"></a>

```java
public java.lang.String getBareMetalCluster();
```

- *Type:* java.lang.String

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#bare_metal_cluster GoogleGkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#location GoogleGkeonpremBareMetalNodePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#name GoogleGkeonpremBareMetalNodePool#name}

---

##### `nodePoolConfig`<sup>Required</sup> <a name="nodePoolConfig" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.nodePoolConfig"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfig getNodePoolConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#node_pool_config GoogleGkeonpremBareMetalNodePool#node_pool_config}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#annotations GoogleGkeonpremBareMetalNodePool#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#display_name GoogleGkeonpremBareMetalNodePool#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#id GoogleGkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#project GoogleGkeonpremBareMetalNodePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.timeouts"></a>

```java
public GoogleGkeonpremBareMetalNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#timeouts GoogleGkeonpremBareMetalNodePool#timeouts}

---

### GoogleGkeonpremBareMetalNodePoolNodePoolConfig <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfig" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig;

GoogleGkeonpremBareMetalNodePoolNodePoolConfig.builder()
    .nodeConfigs(IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .operatingSystem(java.lang.String)
//  .taints(IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs">nodeConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>></code> | node_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.taints">taints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>></code> | taints block. |

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs"></a>

```java
public IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs> getNodeConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#node_configs GoogleGkeonpremBareMetalNodePool#node_configs}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#labels GoogleGkeonpremBareMetalNodePool#labels}

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#operating_system GoogleGkeonpremBareMetalNodePool#operating_system}

---

##### `taints`<sup>Optional</sup> <a name="taints" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.taints"></a>

```java
public IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints> getTaints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#taints GoogleGkeonpremBareMetalNodePool#taints}

---

### GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs;

GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.builder()
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .nodeIp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp">nodeIp</a></code> | <code>java.lang.String</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#labels GoogleGkeonpremBareMetalNodePool#labels}

---

##### `nodeIp`<sup>Optional</sup> <a name="nodeIp" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp"></a>

```java
public java.lang.String getNodeIp();
```

- *Type:* java.lang.String

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#node_ip GoogleGkeonpremBareMetalNodePool#node_ip}

---

### GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints;

GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.builder()
//  .effect(java.lang.String)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key">key</a></code> | <code>java.lang.String</code> | Key associated with the effect. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value">value</a></code> | <code>java.lang.String</code> | Value associated with the effect. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#effect GoogleGkeonpremBareMetalNodePool#effect}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#key GoogleGkeonpremBareMetalNodePool#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#value GoogleGkeonpremBareMetalNodePool#value}

---

### GoogleGkeonpremBareMetalNodePoolStatus <a name="GoogleGkeonpremBareMetalNodePoolStatus" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolStatus;

GoogleGkeonpremBareMetalNodePoolStatus.builder()
    .build();
```


### GoogleGkeonpremBareMetalNodePoolStatusConditions <a name="GoogleGkeonpremBareMetalNodePoolStatusConditions" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolStatusConditions;

GoogleGkeonpremBareMetalNodePoolStatusConditions.builder()
    .build();
```


### GoogleGkeonpremBareMetalNodePoolTimeouts <a name="GoogleGkeonpremBareMetalNodePoolTimeouts" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolTimeouts;

GoogleGkeonpremBareMetalNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#create GoogleGkeonpremBareMetalNodePool#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#delete GoogleGkeonpremBareMetalNodePool#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#update GoogleGkeonpremBareMetalNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#create GoogleGkeonpremBareMetalNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#delete GoogleGkeonpremBareMetalNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_gkeonprem_bare_metal_node_pool#update GoogleGkeonpremBareMetalNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp">resetNodeIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNodeIp` <a name="resetNodeIp" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```java
public void resetNodeIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">nodeIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp">nodeIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeIpInput`<sup>Optional</sup> <a name="nodeIpInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```java
public java.lang.String getNodeIpInput();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeIp`<sup>Required</sup> <a name="nodeIp" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```java
public java.lang.String getNodeIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs">putNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints">resetTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeConfigs` <a name="putNodeConfigs" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs"></a>

```java
public void putNodeConfigs(IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

---

##### `putTaints` <a name="putTaints" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints"></a>

```java
public void putTaints(IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

---

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem"></a>

```java
public void resetOperatingSystem()
```

##### `resetTaints` <a name="resetTaints" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints"></a>

```java
public void resetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs">nodeConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints">taints</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput">nodeConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput">taintsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeConfigs`<sup>Required</sup> <a name="nodeConfigs" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList getNodeConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a>

---

##### `taints`<sup>Required</sup> <a name="taints" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList getTaints();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nodeConfigsInput`<sup>Optional</sup> <a name="nodeConfigsInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs> getNodeConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs</a>>

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```java
public java.lang.String getOperatingSystemInput();
```

- *Type:* java.lang.String

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput"></a>

```java
public IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints> getTaintsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem"></a>

```java
public java.lang.String getOperatingSystem();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get"></a>

```java
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>>

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints</a>

---


### GoogleGkeonpremBareMetalNodePoolStatusConditionsList <a name="GoogleGkeonpremBareMetalNodePoolStatusConditionsList" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList;

new GoogleGkeonpremBareMetalNodePoolStatusConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.get"></a>

```java
public GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference;

new GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime">lastTransitionTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions">GoogleGkeonpremBareMetalNodePoolStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastTransitionTime`<sup>Required</sup> <a name="lastTransitionTime" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```java
public java.lang.String getLastTransitionTime();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremBareMetalNodePoolStatusConditions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions">GoogleGkeonpremBareMetalNodePoolStatusConditions</a>

---


### GoogleGkeonpremBareMetalNodePoolStatusList <a name="GoogleGkeonpremBareMetalNodePoolStatusList" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolStatusList;

new GoogleGkeonpremBareMetalNodePoolStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.get"></a>

```java
public GoogleGkeonpremBareMetalNodePoolStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleGkeonpremBareMetalNodePoolStatusOutputReference <a name="GoogleGkeonpremBareMetalNodePoolStatusOutputReference" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference;

new GoogleGkeonpremBareMetalNodePoolStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList">GoogleGkeonpremBareMetalNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus">GoogleGkeonpremBareMetalNodePoolStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.conditions"></a>

```java
public GoogleGkeonpremBareMetalNodePoolStatusConditionsList getConditions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList">GoogleGkeonpremBareMetalNodePoolStatusConditionsList</a>

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue"></a>

```java
public GoogleGkeonpremBareMetalNodePoolStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus">GoogleGkeonpremBareMetalNodePoolStatus</a>

---


### GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_gkeonprem_bare_metal_node_pool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference;

new GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleGkeonpremBareMetalNodePoolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a>

---



