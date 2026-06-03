# `googleVertexAiReasoningEngine` Submodule <a name="`googleVertexAiReasoningEngine` Submodule" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiReasoningEngine <a name="GoogleVertexAiReasoningEngine" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine google_vertex_ai_reasoning_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngine;

GoogleVertexAiReasoningEngine.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .contextSpec(GoogleVertexAiReasoningEngineContextSpec)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(GoogleVertexAiReasoningEngineEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .spec(GoogleVertexAiReasoningEngineSpec)
//  .timeouts(GoogleVertexAiReasoningEngineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.contextSpec">contextSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | context_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the reasoning engine. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#display_name GoogleVertexAiReasoningEngine#display_name}

---

##### `contextSpec`<sup>Optional</sup> <a name="contextSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.contextSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

context_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#context_spec GoogleVertexAiReasoningEngine#context_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#deletion_policy GoogleVertexAiReasoningEngine#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#description GoogleVertexAiReasoningEngine#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#encryption_spec GoogleVertexAiReasoningEngine#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#labels GoogleVertexAiReasoningEngine#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the reasoning engine. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#region GoogleVertexAiReasoningEngine#region}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#spec GoogleVertexAiReasoningEngine#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#timeouts GoogleVertexAiReasoningEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putContextSpec">putContextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetContextSpec">resetContextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContextSpec` <a name="putContextSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putContextSpec"></a>

```java
public void putContextSpec(GoogleVertexAiReasoningEngineContextSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putContextSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(GoogleVertexAiReasoningEngineEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec"></a>

```java
public void putSpec(GoogleVertexAiReasoningEngineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiReasoningEngineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

---

##### `resetContextSpec` <a name="resetContextSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetContextSpec"></a>

```java
public void resetContextSpec()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiReasoningEngine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngine;

GoogleVertexAiReasoningEngine.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngine;

GoogleVertexAiReasoningEngine.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngine;

GoogleVertexAiReasoningEngine.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngine;

GoogleVertexAiReasoningEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiReasoningEngine.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiReasoningEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiReasoningEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiReasoningEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiReasoningEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpec">contextSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference">GoogleVertexAiReasoningEngineContextSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference">GoogleVertexAiReasoningEngineEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference">GoogleVertexAiReasoningEngineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference">GoogleVertexAiReasoningEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpecInput">contextSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.specInput">specInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contextSpec`<sup>Required</sup> <a name="contextSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpec"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecOutputReference getContextSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference">GoogleVertexAiReasoningEngineContextSpecOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpec"></a>

```java
public GoogleVertexAiReasoningEngineEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference">GoogleVertexAiReasoningEngineEncryptionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.spec"></a>

```java
public GoogleVertexAiReasoningEngineSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference">GoogleVertexAiReasoningEngineSpecOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeouts"></a>

```java
public GoogleVertexAiReasoningEngineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference">GoogleVertexAiReasoningEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `contextSpecInput`<sup>Optional</sup> <a name="contextSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.contextSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineContextSpec getContextSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.encryptionSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.specInput"></a>

```java
public GoogleVertexAiReasoningEngineSpec getSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiReasoningEngineTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngine.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiReasoningEngineConfig <a name="GoogleVertexAiReasoningEngineConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineConfig;

GoogleVertexAiReasoningEngineConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
//  .contextSpec(GoogleVertexAiReasoningEngineContextSpec)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .encryptionSpec(GoogleVertexAiReasoningEngineEncryptionSpec)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .spec(GoogleVertexAiReasoningEngineSpec)
//  .timeouts(GoogleVertexAiReasoningEngineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.contextSpec">contextSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | context_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the ReasoningEngine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the reasoning engine. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#display_name GoogleVertexAiReasoningEngine#display_name}

---

##### `contextSpec`<sup>Optional</sup> <a name="contextSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.contextSpec"></a>

```java
public GoogleVertexAiReasoningEngineContextSpec getContextSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

context_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#context_spec GoogleVertexAiReasoningEngine#context_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/vertex_ai_reasoning_engine.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#deletion_policy GoogleVertexAiReasoningEngine#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the ReasoningEngine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#description GoogleVertexAiReasoningEngine#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.encryptionSpec"></a>

```java
public GoogleVertexAiReasoningEngineEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#encryption_spec GoogleVertexAiReasoningEngine#encryption_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#id GoogleVertexAiReasoningEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels associated with this ReasoningEngine. You can use these to organize and group your ReasoningEngines.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#labels GoogleVertexAiReasoningEngine#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#project GoogleVertexAiReasoningEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the reasoning engine. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#region GoogleVertexAiReasoningEngine#region}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.spec"></a>

```java
public GoogleVertexAiReasoningEngineSpec getSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#spec GoogleVertexAiReasoningEngine#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineConfig.property.timeouts"></a>

```java
public GoogleVertexAiReasoningEngineTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#timeouts GoogleVertexAiReasoningEngine#timeouts}

---

### GoogleVertexAiReasoningEngineContextSpec <a name="GoogleVertexAiReasoningEngineContextSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpec;

GoogleVertexAiReasoningEngineContextSpec.builder()
//  .memoryBankConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec.property.memoryBankConfig">memoryBankConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a></code> | memory_bank_config block. |

---

##### `memoryBankConfig`<sup>Optional</sup> <a name="memoryBankConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec.property.memoryBankConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig getMemoryBankConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

memory_bank_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#memory_bank_config GoogleVertexAiReasoningEngine#memory_bank_config}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig;

GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.builder()
//  .disableMemoryRevisions(java.lang.Boolean|IResolvable)
//  .generationConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig)
//  .similaritySearchConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig)
//  .ttlConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.disableMemoryRevisions">disableMemoryRevisions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, no memory revisions will be created for any requests to the Memory Bank. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a></code> | generation_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.similaritySearchConfig">similaritySearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a></code> | similarity_search_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.ttlConfig">ttlConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a></code> | ttl_config block. |

---

##### `disableMemoryRevisions`<sup>Optional</sup> <a name="disableMemoryRevisions" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.disableMemoryRevisions"></a>

```java
public java.lang.Boolean|IResolvable getDisableMemoryRevisions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, no memory revisions will be created for any requests to the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#disable_memory_revisions GoogleVertexAiReasoningEngine#disable_memory_revisions}

---

##### `generationConfig`<sup>Optional</sup> <a name="generationConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.generationConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig getGenerationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

generation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#generation_config GoogleVertexAiReasoningEngine#generation_config}

---

##### `similaritySearchConfig`<sup>Optional</sup> <a name="similaritySearchConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.similaritySearchConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig getSimilaritySearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

similarity_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#similarity_search_config GoogleVertexAiReasoningEngine#similarity_search_config}

---

##### `ttlConfig`<sup>Optional</sup> <a name="ttlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig.property.ttlConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig getTtlConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#ttl_config GoogleVertexAiReasoningEngine#ttl_config}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig;

GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig.builder()
    .model(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig.property.model">model</a></code> | <code>java.lang.String</code> | The model used to generate memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}. |

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The model used to generate memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#model GoogleVertexAiReasoningEngine#model}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig;

GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig.builder()
    .embeddingModel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig.property.embeddingModel">embeddingModel</a></code> | <code>java.lang.String</code> | The model used to generate embeddings to lookup similar memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}. |

---

##### `embeddingModel`<sup>Required</sup> <a name="embeddingModel" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig.property.embeddingModel"></a>

```java
public java.lang.String getEmbeddingModel();
```

- *Type:* java.lang.String

The model used to generate embeddings to lookup similar memories. Format: projects/{project}/locations/{location}/publishers/google/models/{model}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#embedding_model GoogleVertexAiReasoningEngine#embedding_model}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig;

GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.builder()
//  .defaultTtl(java.lang.String)
//  .granularTtlConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig)
//  .memoryRevisionDefaultTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.String</code> | The default TTL duration of the memories in the Memory Bank. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.granularTtlConfig">granularTtlConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a></code> | granular_ttl_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.memoryRevisionDefaultTtl">memoryRevisionDefaultTtl</a></code> | <code>java.lang.String</code> | The default TTL duration of the memory revisions in the Memory Bank. |

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.defaultTtl"></a>

```java
public java.lang.String getDefaultTtl();
```

- *Type:* java.lang.String

The default TTL duration of the memories in the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#default_ttl GoogleVertexAiReasoningEngine#default_ttl}

---

##### `granularTtlConfig`<sup>Optional</sup> <a name="granularTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.granularTtlConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig getGranularTtlConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

granular_ttl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#granular_ttl_config GoogleVertexAiReasoningEngine#granular_ttl_config}

---

##### `memoryRevisionDefaultTtl`<sup>Optional</sup> <a name="memoryRevisionDefaultTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig.property.memoryRevisionDefaultTtl"></a>

```java
public java.lang.String getMemoryRevisionDefaultTtl();
```

- *Type:* java.lang.String

The default TTL duration of the memory revisions in the Memory Bank.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#memory_revision_default_ttl GoogleVertexAiReasoningEngine#memory_revision_default_ttl}

---

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig;

GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.builder()
//  .createTtl(java.lang.String)
//  .generateCreatedTtl(java.lang.String)
//  .generateUpdatedTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.createTtl">createTtl</a></code> | <code>java.lang.String</code> | The TTL duration for memories uploaded via CreateMemory. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateCreatedTtl">generateCreatedTtl</a></code> | <code>java.lang.String</code> | The TTL duration for memories newly generated via GenerateMemories. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateUpdatedTtl">generateUpdatedTtl</a></code> | <code>java.lang.String</code> | The TTL duration for memories updated via GenerateMemories. |

---

##### `createTtl`<sup>Optional</sup> <a name="createTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.createTtl"></a>

```java
public java.lang.String getCreateTtl();
```

- *Type:* java.lang.String

The TTL duration for memories uploaded via CreateMemory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#create_ttl GoogleVertexAiReasoningEngine#create_ttl}

---

##### `generateCreatedTtl`<sup>Optional</sup> <a name="generateCreatedTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateCreatedTtl"></a>

```java
public java.lang.String getGenerateCreatedTtl();
```

- *Type:* java.lang.String

The TTL duration for memories newly generated via GenerateMemories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#generate_created_ttl GoogleVertexAiReasoningEngine#generate_created_ttl}

---

##### `generateUpdatedTtl`<sup>Optional</sup> <a name="generateUpdatedTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig.property.generateUpdatedTtl"></a>

```java
public java.lang.String getGenerateUpdatedTtl();
```

- *Type:* java.lang.String

The TTL duration for memories updated via GenerateMemories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#generate_updated_ttl GoogleVertexAiReasoningEngine#generate_updated_ttl}

---

### GoogleVertexAiReasoningEngineEncryptionSpec <a name="GoogleVertexAiReasoningEngineEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineEncryptionSpec;

GoogleVertexAiReasoningEngineEncryptionSpec.builder()
    .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Required. |

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect a resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the compute resource
is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#kms_key_name GoogleVertexAiReasoningEngine#kms_key_name}

---

### GoogleVertexAiReasoningEngineSpec <a name="GoogleVertexAiReasoningEngineSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpec;

GoogleVertexAiReasoningEngineSpec.builder()
//  .agentFramework(java.lang.String)
//  .classMethods(java.lang.String)
//  .containerSpec(GoogleVertexAiReasoningEngineSpecContainerSpec)
//  .deploymentSpec(GoogleVertexAiReasoningEngineSpecDeploymentSpec)
//  .identityType(java.lang.String)
//  .packageSpec(GoogleVertexAiReasoningEngineSpecPackageSpec)
//  .serviceAccount(java.lang.String)
//  .sourceCodeSpec(GoogleVertexAiReasoningEngineSpecSourceCodeSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.agentFramework">agentFramework</a></code> | <code>java.lang.String</code> | Optional. The OSS agent framework used to develop the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.classMethods">classMethods</a></code> | <code>java.lang.String</code> | Optional. Declarations for object class methods in OpenAPI specification format. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.deploymentSpec">deploymentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a></code> | deployment_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.packageSpec">packageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a></code> | package_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.sourceCodeSpec">sourceCodeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a></code> | source_code_spec block. |

---

##### `agentFramework`<sup>Optional</sup> <a name="agentFramework" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.agentFramework"></a>

```java
public java.lang.String getAgentFramework();
```

- *Type:* java.lang.String

Optional. The OSS agent framework used to develop the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#agent_framework GoogleVertexAiReasoningEngine#agent_framework}

---

##### `classMethods`<sup>Optional</sup> <a name="classMethods" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.classMethods"></a>

```java
public java.lang.String getClassMethods();
```

- *Type:* java.lang.String

Optional. Declarations for object class methods in OpenAPI specification format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#class_methods GoogleVertexAiReasoningEngine#class_methods}

---

##### `containerSpec`<sup>Optional</sup> <a name="containerSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.containerSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecContainerSpec getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#container_spec GoogleVertexAiReasoningEngine#container_spec}

---

##### `deploymentSpec`<sup>Optional</sup> <a name="deploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.deploymentSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpec getDeploymentSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

deployment_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#deployment_spec GoogleVertexAiReasoningEngine#deployment_spec}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Optional.

The identity type to use for the Reasoning Engine.
If not specified, the 'service_account' field will be used if set,
otherwise the default Vertex AI Reasoning Engine Service Agent in the project will be used.
Possible values:

* 'SERVICE_ACCOUNT': Use a custom service account if the 'service_account' field is set, otherwise use the default Vertex AI Reasoning Engine Service Agent in the project.
* 'AGENT_IDENTITY': Use Agent Identity. The 'service_account' field must not be set. Possible values: ["SERVICE_ACCOUNT", "AGENT_IDENTITY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#identity_type GoogleVertexAiReasoningEngine#identity_type}

---

##### `packageSpec`<sup>Optional</sup> <a name="packageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.packageSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecPackageSpec getPackageSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#package_spec GoogleVertexAiReasoningEngine#package_spec}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Optional.

The service account that the Reasoning Engine artifact runs
as. It should have "roles/storage.objectViewer" for reading the user
project's Cloud Storage and "roles/aiplatform.user" for using Vertex
extensions. If not specified, the Vertex AI Reasoning Engine service
Agent in the project will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#service_account GoogleVertexAiReasoningEngine#service_account}

---

##### `sourceCodeSpec`<sup>Optional</sup> <a name="sourceCodeSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec.property.sourceCodeSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpec getSourceCodeSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

source_code_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#source_code_spec GoogleVertexAiReasoningEngine#source_code_spec}

---

### GoogleVertexAiReasoningEngineSpecContainerSpec <a name="GoogleVertexAiReasoningEngineSpecContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecContainerSpec;

GoogleVertexAiReasoningEngineSpecContainerSpec.builder()
    .imageUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica. |

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

The Artifact Registry Docker image URI (e.g., 'us-central1-docker.pkg.dev/my-project/my-repo/my-image:tag') of the container image that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#image_uri GoogleVertexAiReasoningEngine#image_uri}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpec <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpec;

GoogleVertexAiReasoningEngineSpecDeploymentSpec.builder()
//  .containerConcurrency(java.lang.Number)
//  .env(IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv>)
//  .maxInstances(java.lang.Number)
//  .minInstances(java.lang.Number)
//  .pscInterfaceConfig(GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig)
//  .resourceLimits(java.util.Map<java.lang.String, java.lang.String>)
//  .secretEnv(IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency">containerConcurrency</a></code> | <code>java.lang.Number</code> | Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.env">env</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>></code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits">resourceLimits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv">secretEnv</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>></code> | secret_env block. |

---

##### `containerConcurrency`<sup>Optional</sup> <a name="containerConcurrency" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.containerConcurrency"></a>

```java
public java.lang.Number getContainerConcurrency();
```

- *Type:* java.lang.Number

Optional. Concurrency for each container and agent server. Recommended value: 2 * cpu + 1. Defaults to 9.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#container_concurrency GoogleVertexAiReasoningEngine#container_concurrency}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.env"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv> getEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#env GoogleVertexAiReasoningEngine#env}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

Optional.

The maximum number of application instances that can be
launched to handle increased traffic. Defaults to 100.
Range: [1, 1000]. If VPC-SC or PSC-I is enabled, the acceptable
range is [1, 100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#max_instances GoogleVertexAiReasoningEngine#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

Optional.

The minimum number of application instances that will be
kept running at all times. Defaults to 1. Range: [0, 10].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#min_instances GoogleVertexAiReasoningEngine#min_instances}

---

##### `pscInterfaceConfig`<sup>Optional</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.pscInterfaceConfig"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig getPscInterfaceConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#psc_interface_config GoogleVertexAiReasoningEngine#psc_interface_config}

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.resourceLimits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Resource limits for each container. Only 'cpu' and 'memory' keys are supported.

Defaults to {"cpu": "4", "memory": "4Gi"}.

The only supported values for CPU are '1', '2', '4', '6' and '8'.
For more information, go to
https://cloud.google.com/run/docs/configuring/cpu.

The only supported values for memory are '1Gi', '2Gi', ... '32 Gi'.
For more information, go to
https://cloud.google.com/run/docs/configuring/memory-limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#resource_limits GoogleVertexAiReasoningEngine#resource_limits}

---

##### `secretEnv`<sup>Optional</sup> <a name="secretEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec.property.secretEnv"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv> getSecretEnv();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

secret_env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#secret_env GoogleVertexAiReasoningEngine#secret_env}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv;

GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.value">value</a></code> | <code>java.lang.String</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot
be resolved, the reference in the input string will be
unchanged. The $(VAR_NAME) syntax can be escaped with a
double $$, ie: $$(VAR_NAME). Escaped references will never
be expanded, regardless of whether the variable exists
or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#value GoogleVertexAiReasoningEngine#value}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig;

GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.builder()
//  .dnsPeeringConfigs(IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs>)
//  .networkAttachment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `dnsPeeringConfigs`<sup>Optional</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> getDnsPeeringConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#dns_peering_configs GoogleVertexAiReasoningEngine#dns_peering_configs}

---

##### `networkAttachment`<sup>Optional</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

Optional.

The name of the Compute Engine network attachment
to attach to the resource within the region and user project.
To specify this field, you must have already created a network attachment.
This field is only used for resources using PSC-Interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#network_attachment GoogleVertexAiReasoningEngine#network_attachment}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs;

GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.builder()
    .domain(java.lang.String)
    .targetNetwork(java.lang.String)
    .targetProject(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">domain</a></code> | <code>java.lang.String</code> | Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | Required. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Required. The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#domain GoogleVertexAiReasoningEngine#domain}

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

Required. The VPC network name in the targetProject where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#target_network GoogleVertexAiReasoningEngine#target_network}

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

Required.

The project id hosting the Cloud DNS managed
zone that contains the 'domain'.
The Vertex AI service Agent requires the dns.peer role
on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#target_project GoogleVertexAiReasoningEngine#target_project}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv;

GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.builder()
    .name(java.lang.String)
    .secretRef(GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef">secretRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | secret_ref block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#name GoogleVertexAiReasoningEngine#name}

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv.property.secretRef"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#secret_ref GoogleVertexAiReasoningEngine#secret_ref}

---

### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef;

GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.builder()
    .secret(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret">secret</a></code> | <code>java.lang.String</code> | The name of the secret in Cloud Secret Manager. Format: {secret_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version">version</a></code> | <code>java.lang.String</code> | The Cloud Secret Manager secret version. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The name of the secret in Cloud Secret Manager. Format: {secret_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#secret GoogleVertexAiReasoningEngine#secret}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The Cloud Secret Manager secret version.

Can be 'latest'
for the latest version, an integer for a specific
version, or a version alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}

---

### GoogleVertexAiReasoningEngineSpecPackageSpec <a name="GoogleVertexAiReasoningEngineSpecPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecPackageSpec;

GoogleVertexAiReasoningEngineSpecPackageSpec.builder()
//  .dependencyFilesGcsUri(java.lang.String)
//  .pickleObjectGcsUri(java.lang.String)
//  .pythonVersion(java.lang.String)
//  .requirementsGcsUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri">dependencyFilesGcsUri</a></code> | <code>java.lang.String</code> | Optional. The Cloud Storage URI of the dependency files in tar.gz format. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri">pickleObjectGcsUri</a></code> | <code>java.lang.String</code> | Optional. The Cloud Storage URI of the pickled python object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri">requirementsGcsUri</a></code> | <code>java.lang.String</code> | Optional. The Cloud Storage URI of the requirements.txtfile. |

---

##### `dependencyFilesGcsUri`<sup>Optional</sup> <a name="dependencyFilesGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.dependencyFilesGcsUri"></a>

```java
public java.lang.String getDependencyFilesGcsUri();
```

- *Type:* java.lang.String

Optional. The Cloud Storage URI of the dependency files in tar.gz format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#dependency_files_gcs_uri GoogleVertexAiReasoningEngine#dependency_files_gcs_uri}

---

##### `pickleObjectGcsUri`<sup>Optional</sup> <a name="pickleObjectGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pickleObjectGcsUri"></a>

```java
public java.lang.String getPickleObjectGcsUri();
```

- *Type:* java.lang.String

Optional. The Cloud Storage URI of the pickled python object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#pickle_object_gcs_uri GoogleVertexAiReasoningEngine#pickle_object_gcs_uri}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

Optional. The Python version. Currently support 3.8, 3.9, 3.10, 3.11, 3.12, 3.13. If not specified, default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#python_version GoogleVertexAiReasoningEngine#python_version}

---

##### `requirementsGcsUri`<sup>Optional</sup> <a name="requirementsGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec.property.requirementsGcsUri"></a>

```java
public java.lang.String getRequirementsGcsUri();
```

- *Type:* java.lang.String

Optional. The Cloud Storage URI of the requirements.txtfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#requirements_gcs_uri GoogleVertexAiReasoningEngine#requirements_gcs_uri}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpec <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec;

GoogleVertexAiReasoningEngineSpecSourceCodeSpec.builder()
//  .developerConnectSource(GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource)
//  .imageSpec(GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec)
//  .inlineSource(GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource)
//  .pythonSpec(GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource">developerConnectSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | developer_connect_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec">imageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | image_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource">inlineSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | inline_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec">pythonSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | python_spec block. |

---

##### `developerConnectSource`<sup>Optional</sup> <a name="developerConnectSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.developerConnectSource"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource getDeveloperConnectSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

developer_connect_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#developer_connect_source GoogleVertexAiReasoningEngine#developer_connect_source}

---

##### `imageSpec`<sup>Optional</sup> <a name="imageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.imageSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec getImageSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

image_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#image_spec GoogleVertexAiReasoningEngine#image_spec}

---

##### `inlineSource`<sup>Optional</sup> <a name="inlineSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.inlineSource"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource getInlineSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

inline_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#inline_source GoogleVertexAiReasoningEngine#inline_source}

---

##### `pythonSpec`<sup>Optional</sup> <a name="pythonSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec.property.pythonSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec getPythonSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

python_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#python_spec GoogleVertexAiReasoningEngine#python_spec}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource;

GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.builder()
    .config(GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | config block. |

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource.property.config"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#config GoogleVertexAiReasoningEngine#config}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig;

GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.builder()
    .dir(java.lang.String)
    .gitRepositoryLink(java.lang.String)
    .revision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir">dir</a></code> | <code>java.lang.String</code> | Directory, relative to the source root, in which to run the build. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink">gitRepositoryLink</a></code> | <code>java.lang.String</code> | The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision">revision</a></code> | <code>java.lang.String</code> | The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref. |

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

Directory, relative to the source root, in which to run the build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#dir GoogleVertexAiReasoningEngine#dir}

---

##### `gitRepositoryLink`<sup>Required</sup> <a name="gitRepositoryLink" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.gitRepositoryLink"></a>

```java
public java.lang.String getGitRepositoryLink();
```

- *Type:* java.lang.String

The Developer Connect Git repository link, formatted as projects/* /locations/* /connections/* /gitRepositoryLink/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#git_repository_link GoogleVertexAiReasoningEngine#git_repository_link}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

The revision to fetch from the Git repository such as a branch, a tag, a commit SHA, or any Git ref.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#revision GoogleVertexAiReasoningEngine#revision}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec;

GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec.builder()
//  .buildArgs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs">buildArgs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Build arguments to be used. They will be passed through --build-arg flags. |

---

##### `buildArgs`<sup>Optional</sup> <a name="buildArgs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec.property.buildArgs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildArgs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Build arguments to be used. They will be passed through --build-arg flags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#build_args GoogleVertexAiReasoningEngine#build_args}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource;

GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource.builder()
//  .sourceArchive(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive">sourceArchive</a></code> | <code>java.lang.String</code> | Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string. |

---

##### `sourceArchive`<sup>Optional</sup> <a name="sourceArchive" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource.property.sourceArchive"></a>

```java
public java.lang.String getSourceArchive();
```

- *Type:* java.lang.String

Required. Input only. The application source code archive, provided as a compressed tarball (.tar.gz) file. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#source_archive GoogleVertexAiReasoningEngine#source_archive}

---

### GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec;

GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.builder()
//  .entrypointModule(java.lang.String)
//  .entrypointObject(java.lang.String)
//  .requirementsFile(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule">entrypointModule</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject">entrypointObject</a></code> | <code>java.lang.String</code> | Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile">requirementsFile</a></code> | <code>java.lang.String</code> | Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version">version</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `entrypointModule`<sup>Optional</sup> <a name="entrypointModule" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointModule"></a>

```java
public java.lang.String getEntrypointModule();
```

- *Type:* java.lang.String

Optional.

The Python module to load as the entrypoint,
specified as a fully qualified module name. For example:
path.to.agent. If not specified, defaults to "agent".
The project root will be added to Python sys.path, allowing
imports to be specified relative to the root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_module GoogleVertexAiReasoningEngine#entrypoint_module}

---

##### `entrypointObject`<sup>Optional</sup> <a name="entrypointObject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.entrypointObject"></a>

```java
public java.lang.String getEntrypointObject();
```

- *Type:* java.lang.String

Optional. The name of the callable object within the entrypointModule to use as the application If not specified, defaults to "root_agent".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#entrypoint_object GoogleVertexAiReasoningEngine#entrypoint_object}

---

##### `requirementsFile`<sup>Optional</sup> <a name="requirementsFile" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.requirementsFile"></a>

```java
public java.lang.String getRequirementsFile();
```

- *Type:* java.lang.String

Optional. The path to the requirements file, relative to the source root. If not specified, defaults to "requirements.txt".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#requirements_file GoogleVertexAiReasoningEngine#requirements_file}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Optional.

The version of Python to use. Support version
includes 3.9, 3.10, 3.11, 3.12, 3.13. If not specified,
default value is 3.10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#version GoogleVertexAiReasoningEngine#version}

---

### GoogleVertexAiReasoningEngineTimeouts <a name="GoogleVertexAiReasoningEngineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineTimeouts;

GoogleVertexAiReasoningEngineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#create GoogleVertexAiReasoningEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#delete GoogleVertexAiReasoningEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#update GoogleVertexAiReasoningEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#create GoogleVertexAiReasoningEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#delete GoogleVertexAiReasoningEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_reasoning_engine#update GoogleVertexAiReasoningEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference;

new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference;

new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putGenerationConfig">putGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putSimilaritySearchConfig">putSimilaritySearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig">putTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetDisableMemoryRevisions">resetDisableMemoryRevisions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetGenerationConfig">resetGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetSimilaritySearchConfig">resetSimilaritySearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetTtlConfig">resetTtlConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenerationConfig` <a name="putGenerationConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putGenerationConfig"></a>

```java
public void putGenerationConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putGenerationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

---

##### `putSimilaritySearchConfig` <a name="putSimilaritySearchConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putSimilaritySearchConfig"></a>

```java
public void putSimilaritySearchConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putSimilaritySearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

---

##### `putTtlConfig` <a name="putTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig"></a>

```java
public void putTtlConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.putTtlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

---

##### `resetDisableMemoryRevisions` <a name="resetDisableMemoryRevisions" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetDisableMemoryRevisions"></a>

```java
public void resetDisableMemoryRevisions()
```

##### `resetGenerationConfig` <a name="resetGenerationConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetGenerationConfig"></a>

```java
public void resetGenerationConfig()
```

##### `resetSimilaritySearchConfig` <a name="resetSimilaritySearchConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetSimilaritySearchConfig"></a>

```java
public void resetSimilaritySearchConfig()
```

##### `resetTtlConfig` <a name="resetTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.resetTtlConfig"></a>

```java
public void resetTtlConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfig">generationConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfig">similaritySearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfig">ttlConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisionsInput">disableMemoryRevisionsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfigInput">generationConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfigInput">similaritySearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfigInput">ttlConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisions">disableMemoryRevisions</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generationConfig`<sup>Required</sup> <a name="generationConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference getGenerationConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfigOutputReference</a>

---

##### `similaritySearchConfig`<sup>Required</sup> <a name="similaritySearchConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference getSimilaritySearchConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference</a>

---

##### `ttlConfig`<sup>Required</sup> <a name="ttlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference getTtlConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference</a>

---

##### `disableMemoryRevisionsInput`<sup>Optional</sup> <a name="disableMemoryRevisionsInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisionsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableMemoryRevisionsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `generationConfigInput`<sup>Optional</sup> <a name="generationConfigInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.generationConfigInput"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig getGenerationConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigGenerationConfig</a>

---

##### `similaritySearchConfigInput`<sup>Optional</sup> <a name="similaritySearchConfigInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.similaritySearchConfigInput"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig getSimilaritySearchConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

---

##### `ttlConfigInput`<sup>Optional</sup> <a name="ttlConfigInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.ttlConfigInput"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig getTtlConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

---

##### `disableMemoryRevisions`<sup>Required</sup> <a name="disableMemoryRevisions" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.disableMemoryRevisions"></a>

```java
public java.lang.Boolean|IResolvable getDisableMemoryRevisions();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference;

new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModelInput">embeddingModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModel">embeddingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `embeddingModelInput`<sup>Optional</sup> <a name="embeddingModelInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModelInput"></a>

```java
public java.lang.String getEmbeddingModelInput();
```

- *Type:* java.lang.String

---

##### `embeddingModel`<sup>Required</sup> <a name="embeddingModel" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.embeddingModel"></a>

```java
public java.lang.String getEmbeddingModel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigSimilaritySearchConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference;

new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetCreateTtl">resetCreateTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateCreatedTtl">resetGenerateCreatedTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateUpdatedTtl">resetGenerateUpdatedTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreateTtl` <a name="resetCreateTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetCreateTtl"></a>

```java
public void resetCreateTtl()
```

##### `resetGenerateCreatedTtl` <a name="resetGenerateCreatedTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateCreatedTtl"></a>

```java
public void resetGenerateCreatedTtl()
```

##### `resetGenerateUpdatedTtl` <a name="resetGenerateUpdatedTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.resetGenerateUpdatedTtl"></a>

```java
public void resetGenerateUpdatedTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtlInput">createTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtlInput">generateCreatedTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtlInput">generateUpdatedTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtl">createTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtl">generateCreatedTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtl">generateUpdatedTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTtlInput`<sup>Optional</sup> <a name="createTtlInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtlInput"></a>

```java
public java.lang.String getCreateTtlInput();
```

- *Type:* java.lang.String

---

##### `generateCreatedTtlInput`<sup>Optional</sup> <a name="generateCreatedTtlInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtlInput"></a>

```java
public java.lang.String getGenerateCreatedTtlInput();
```

- *Type:* java.lang.String

---

##### `generateUpdatedTtlInput`<sup>Optional</sup> <a name="generateUpdatedTtlInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtlInput"></a>

```java
public java.lang.String getGenerateUpdatedTtlInput();
```

- *Type:* java.lang.String

---

##### `createTtl`<sup>Required</sup> <a name="createTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.createTtl"></a>

```java
public java.lang.String getCreateTtl();
```

- *Type:* java.lang.String

---

##### `generateCreatedTtl`<sup>Required</sup> <a name="generateCreatedTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateCreatedTtl"></a>

```java
public java.lang.String getGenerateCreatedTtl();
```

- *Type:* java.lang.String

---

##### `generateUpdatedTtl`<sup>Required</sup> <a name="generateUpdatedTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.generateUpdatedTtl"></a>

```java
public java.lang.String getGenerateUpdatedTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference;

new GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig">putGranularTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetGranularTtlConfig">resetGranularTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetMemoryRevisionDefaultTtl">resetMemoryRevisionDefaultTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGranularTtlConfig` <a name="putGranularTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig"></a>

```java
public void putGranularTtlConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.putGranularTtlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

---

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetGranularTtlConfig` <a name="resetGranularTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetGranularTtlConfig"></a>

```java
public void resetGranularTtlConfig()
```

##### `resetMemoryRevisionDefaultTtl` <a name="resetMemoryRevisionDefaultTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.resetMemoryRevisionDefaultTtl"></a>

```java
public void resetMemoryRevisionDefaultTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfig">granularTtlConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfigInput">granularTtlConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtlInput">memoryRevisionDefaultTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtl">memoryRevisionDefaultTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `granularTtlConfig`<sup>Required</sup> <a name="granularTtlConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference getGranularTtlConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfigOutputReference</a>

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtlInput"></a>

```java
public java.lang.String getDefaultTtlInput();
```

- *Type:* java.lang.String

---

##### `granularTtlConfigInput`<sup>Optional</sup> <a name="granularTtlConfigInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.granularTtlConfigInput"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig getGranularTtlConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigGranularTtlConfig</a>

---

##### `memoryRevisionDefaultTtlInput`<sup>Optional</sup> <a name="memoryRevisionDefaultTtlInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtlInput"></a>

```java
public java.lang.String getMemoryRevisionDefaultTtlInput();
```

- *Type:* java.lang.String

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.defaultTtl"></a>

```java
public java.lang.String getDefaultTtl();
```

- *Type:* java.lang.String

---

##### `memoryRevisionDefaultTtl`<sup>Required</sup> <a name="memoryRevisionDefaultTtl" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.memoryRevisionDefaultTtl"></a>

```java
public java.lang.String getMemoryRevisionDefaultTtl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigTtlConfig</a>

---


### GoogleVertexAiReasoningEngineContextSpecOutputReference <a name="GoogleVertexAiReasoningEngineContextSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineContextSpecOutputReference;

new GoogleVertexAiReasoningEngineContextSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig">putMemoryBankConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resetMemoryBankConfig">resetMemoryBankConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMemoryBankConfig` <a name="putMemoryBankConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig"></a>

```java
public void putMemoryBankConfig(GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.putMemoryBankConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

---

##### `resetMemoryBankConfig` <a name="resetMemoryBankConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.resetMemoryBankConfig"></a>

```java
public void resetMemoryBankConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfig">memoryBankConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfigInput">memoryBankConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryBankConfig`<sup>Required</sup> <a name="memoryBankConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfig"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference getMemoryBankConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfigOutputReference</a>

---

##### `memoryBankConfigInput`<sup>Optional</sup> <a name="memoryBankConfigInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.memoryBankConfigInput"></a>

```java
public GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig getMemoryBankConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig">GoogleVertexAiReasoningEngineContextSpecMemoryBankConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineContextSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineContextSpec">GoogleVertexAiReasoningEngineContextSpec</a>

---


### GoogleVertexAiReasoningEngineEncryptionSpecOutputReference <a name="GoogleVertexAiReasoningEngineEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference;

new GoogleVertexAiReasoningEngineEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineEncryptionSpec">GoogleVertexAiReasoningEngineEncryptionSpec</a>

---


### GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference;

new GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecContainerSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.get"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig">putPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv">putSecretEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency">resetContainerConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig">resetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv">resetSecretEnv</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

---

##### `putPscInterfaceConfig` <a name="putPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig"></a>

```java
public void putPscInterfaceConfig(GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---

##### `putSecretEnv` <a name="putSecretEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv"></a>

```java
public void putSecretEnv(IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.putSecretEnv.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

---

##### `resetContainerConcurrency` <a name="resetContainerConcurrency" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetContainerConcurrency"></a>

```java
public void resetContainerConcurrency()
```

##### `resetEnv` <a name="resetEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMaxInstances"></a>

```java
public void resetMaxInstances()
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetMinInstances"></a>

```java
public void resetMinInstances()
```

##### `resetPscInterfaceConfig` <a name="resetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetPscInterfaceConfig"></a>

```java
public void resetPscInterfaceConfig()
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetResourceLimits"></a>

```java
public void resetResourceLimits()
```

##### `resetSecretEnv` <a name="resetSecretEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.resetSecretEnv"></a>

```java
public void resetSecretEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env">env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig">pscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv">secretEnv</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput">containerConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput">envInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput">maxInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput">minInstancesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput">pscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput">secretEnvInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency">containerConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances">maxInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances">minInstances</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits">resourceLimits</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.env"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList getEnv();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnvList</a>

---

##### `pscInterfaceConfig`<sup>Required</sup> <a name="pscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfig"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference getPscInterfaceConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference</a>

---

##### `secretEnv`<sup>Required</sup> <a name="secretEnv" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnv"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList getSecretEnv();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList</a>

---

##### `containerConcurrencyInput`<sup>Optional</sup> <a name="containerConcurrencyInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrencyInput"></a>

```java
public java.lang.Number getContainerConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.envInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv> getEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecEnv</a>>

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstancesInput"></a>

```java
public java.lang.Number getMaxInstancesInput();
```

- *Type:* java.lang.Number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstancesInput"></a>

```java
public java.lang.Number getMinInstancesInput();
```

- *Type:* java.lang.Number

---

##### `pscInterfaceConfigInput`<sup>Optional</sup> <a name="pscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.pscInterfaceConfigInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig getPscInterfaceConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimitsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLimitsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `secretEnvInput`<sup>Optional</sup> <a name="secretEnvInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.secretEnvInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv> getSecretEnvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

---

##### `containerConcurrency`<sup>Required</sup> <a name="containerConcurrency" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.containerConcurrency"></a>

```java
public java.lang.Number getContainerConcurrency();
```

- *Type:* java.lang.Number

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.maxInstances"></a>

```java
public java.lang.Number getMaxInstances();
```

- *Type:* java.lang.Number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.minInstances"></a>

```java
public java.lang.Number getMinInstances();
```

- *Type:* java.lang.Number

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.resourceLimits"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResourceLimits();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">targetNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">targetProjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">targetNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">targetProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `targetNetworkInput`<sup>Optional</sup> <a name="targetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```java
public java.lang.String getTargetNetworkInput();
```

- *Type:* java.lang.String

---

##### `targetProjectInput`<sup>Optional</sup> <a name="targetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```java
public java.lang.String getTargetProjectInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `targetNetwork`<sup>Required</sup> <a name="targetNetwork" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```java
public java.lang.String getTargetNetwork();
```

- *Type:* java.lang.String

---

##### `targetProject`<sup>Required</sup> <a name="targetProject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```java
public java.lang.String getTargetProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">putDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">resetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">resetNetworkAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsPeeringConfigs` <a name="putDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```java
public void putDnsPeeringConfigs(IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---

##### `resetDnsPeeringConfigs` <a name="resetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```java
public void resetDnsPeeringConfigs()
```

##### `resetNetworkAttachment` <a name="resetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```java
public void resetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">dnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">dnsPeeringConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsPeeringConfigs`<sup>Required</sup> <a name="dnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList getDnsPeeringConfigs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `dnsPeeringConfigsInput`<sup>Optional</sup> <a name="dnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs> getDnsPeeringConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigDnsPeeringConfigs</a>>

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```java
public java.lang.String getNetworkAttachmentInput();
```

- *Type:* java.lang.String

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```java
public java.lang.String getNetworkAttachment();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig">GoogleVertexAiReasoningEngineSpecDeploymentSpecPscInterfaceConfig</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef"></a>

```java
public void putSecretRef(GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRef"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.secretRefInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnv</a>

---


### GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference <a name="GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference;

new GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRefOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef">GoogleVertexAiReasoningEngineSpecDeploymentSpecSecretEnvSecretRef</a>

---


### GoogleVertexAiReasoningEngineSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecOutputReference;

new GoogleVertexAiReasoningEngineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putContainerSpec">putContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec">putDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec">putPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec">putSourceCodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetAgentFramework">resetAgentFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetClassMethods">resetClassMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetContainerSpec">resetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec">resetDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetPackageSpec">resetPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec">resetSourceCodeSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerSpec` <a name="putContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putContainerSpec"></a>

```java
public void putContainerSpec(GoogleVertexAiReasoningEngineSpecContainerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

---

##### `putDeploymentSpec` <a name="putDeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec"></a>

```java
public void putDeploymentSpec(GoogleVertexAiReasoningEngineSpecDeploymentSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putDeploymentSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

---

##### `putPackageSpec` <a name="putPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec"></a>

```java
public void putPackageSpec(GoogleVertexAiReasoningEngineSpecPackageSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putPackageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

---

##### `putSourceCodeSpec` <a name="putSourceCodeSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec"></a>

```java
public void putSourceCodeSpec(GoogleVertexAiReasoningEngineSpecSourceCodeSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.putSourceCodeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

---

##### `resetAgentFramework` <a name="resetAgentFramework" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetAgentFramework"></a>

```java
public void resetAgentFramework()
```

##### `resetClassMethods` <a name="resetClassMethods" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetClassMethods"></a>

```java
public void resetClassMethods()
```

##### `resetContainerSpec` <a name="resetContainerSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetContainerSpec"></a>

```java
public void resetContainerSpec()
```

##### `resetDeploymentSpec` <a name="resetDeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetDeploymentSpec"></a>

```java
public void resetDeploymentSpec()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetPackageSpec` <a name="resetPackageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetPackageSpec"></a>

```java
public void resetPackageSpec()
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetServiceAccount"></a>

```java
public void resetServiceAccount()
```

##### `resetSourceCodeSpec` <a name="resetSourceCodeSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.resetSourceCodeSpec"></a>

```java
public void resetSourceCodeSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpec">containerSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference">GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpec">deploymentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity">effectiveIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpec">packageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference">GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec">sourceCodeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput">agentFrameworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethodsInput">classMethodsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpecInput">containerSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput">deploymentSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpecInput">packageSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput">sourceCodeSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFramework">agentFramework</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethods">classMethods</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerSpec`<sup>Required</sup> <a name="containerSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference getContainerSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference">GoogleVertexAiReasoningEngineSpecContainerSpecOutputReference</a>

---

##### `deploymentSpec`<sup>Required</sup> <a name="deploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference getDeploymentSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference">GoogleVertexAiReasoningEngineSpecDeploymentSpecOutputReference</a>

---

##### `effectiveIdentity`<sup>Required</sup> <a name="effectiveIdentity" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.effectiveIdentity"></a>

```java
public java.lang.String getEffectiveIdentity();
```

- *Type:* java.lang.String

---

##### `packageSpec`<sup>Required</sup> <a name="packageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference getPackageSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference">GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference</a>

---

##### `sourceCodeSpec`<sup>Required</sup> <a name="sourceCodeSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference getSourceCodeSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference</a>

---

##### `agentFrameworkInput`<sup>Optional</sup> <a name="agentFrameworkInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFrameworkInput"></a>

```java
public java.lang.String getAgentFrameworkInput();
```

- *Type:* java.lang.String

---

##### `classMethodsInput`<sup>Optional</sup> <a name="classMethodsInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethodsInput"></a>

```java
public java.lang.String getClassMethodsInput();
```

- *Type:* java.lang.String

---

##### `containerSpecInput`<sup>Optional</sup> <a name="containerSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.containerSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecContainerSpec getContainerSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecContainerSpec">GoogleVertexAiReasoningEngineSpecContainerSpec</a>

---

##### `deploymentSpecInput`<sup>Optional</sup> <a name="deploymentSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.deploymentSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecDeploymentSpec getDeploymentSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecDeploymentSpec">GoogleVertexAiReasoningEngineSpecDeploymentSpec</a>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `packageSpecInput`<sup>Optional</sup> <a name="packageSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.packageSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecPackageSpec getPackageSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceCodeSpecInput`<sup>Optional</sup> <a name="sourceCodeSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.sourceCodeSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpec getSourceCodeSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

---

##### `agentFramework`<sup>Required</sup> <a name="agentFramework" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.agentFramework"></a>

```java
public java.lang.String getAgentFramework();
```

- *Type:* java.lang.String

---

##### `classMethods`<sup>Required</sup> <a name="classMethods" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.classMethods"></a>

```java
public java.lang.String getClassMethods();
```

- *Type:* java.lang.String

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpec">GoogleVertexAiReasoningEngineSpec</a>

---


### GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference;

new GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri">resetDependencyFilesGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri">resetPickleObjectGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri">resetRequirementsGcsUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDependencyFilesGcsUri` <a name="resetDependencyFilesGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetDependencyFilesGcsUri"></a>

```java
public void resetDependencyFilesGcsUri()
```

##### `resetPickleObjectGcsUri` <a name="resetPickleObjectGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPickleObjectGcsUri"></a>

```java
public void resetPickleObjectGcsUri()
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetPythonVersion"></a>

```java
public void resetPythonVersion()
```

##### `resetRequirementsGcsUri` <a name="resetRequirementsGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.resetRequirementsGcsUri"></a>

```java
public void resetRequirementsGcsUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput">dependencyFilesGcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput">pickleObjectGcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput">requirementsGcsUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri">dependencyFilesGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri">pickleObjectGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri">requirementsGcsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dependencyFilesGcsUriInput`<sup>Optional</sup> <a name="dependencyFilesGcsUriInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUriInput"></a>

```java
public java.lang.String getDependencyFilesGcsUriInput();
```

- *Type:* java.lang.String

---

##### `pickleObjectGcsUriInput`<sup>Optional</sup> <a name="pickleObjectGcsUriInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUriInput"></a>

```java
public java.lang.String getPickleObjectGcsUriInput();
```

- *Type:* java.lang.String

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersionInput"></a>

```java
public java.lang.String getPythonVersionInput();
```

- *Type:* java.lang.String

---

##### `requirementsGcsUriInput`<sup>Optional</sup> <a name="requirementsGcsUriInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUriInput"></a>

```java
public java.lang.String getRequirementsGcsUriInput();
```

- *Type:* java.lang.String

---

##### `dependencyFilesGcsUri`<sup>Required</sup> <a name="dependencyFilesGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.dependencyFilesGcsUri"></a>

```java
public java.lang.String getDependencyFilesGcsUri();
```

- *Type:* java.lang.String

---

##### `pickleObjectGcsUri`<sup>Required</sup> <a name="pickleObjectGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pickleObjectGcsUri"></a>

```java
public java.lang.String getPickleObjectGcsUri();
```

- *Type:* java.lang.String

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `requirementsGcsUri`<sup>Required</sup> <a name="requirementsGcsUri" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.requirementsGcsUri"></a>

```java
public java.lang.String getRequirementsGcsUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecPackageSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecPackageSpec">GoogleVertexAiReasoningEngineSpecPackageSpec</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference;

new GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput">dirInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput">gitRepositoryLinkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput">revisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir">dir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink">gitRepositoryLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision">revision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dirInput`<sup>Optional</sup> <a name="dirInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dirInput"></a>

```java
public java.lang.String getDirInput();
```

- *Type:* java.lang.String

---

##### `gitRepositoryLinkInput`<sup>Optional</sup> <a name="gitRepositoryLinkInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLinkInput"></a>

```java
public java.lang.String getGitRepositoryLinkInput();
```

- *Type:* java.lang.String

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revisionInput"></a>

```java
public java.lang.String getRevisionInput();
```

- *Type:* java.lang.String

---

##### `dir`<sup>Required</sup> <a name="dir" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.dir"></a>

```java
public java.lang.String getDir();
```

- *Type:* java.lang.String

---

##### `gitRepositoryLink`<sup>Required</sup> <a name="gitRepositoryLink" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.gitRepositoryLink"></a>

```java
public java.lang.String getGitRepositoryLink();
```

- *Type:* java.lang.String

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.revision"></a>

```java
public java.lang.String getRevision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference;

new GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig">putConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig"></a>

```java
public void putConfig(GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.config"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.configInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference;

new GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs">resetBuildArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildArgs` <a name="resetBuildArgs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.resetBuildArgs"></a>

```java
public void resetBuildArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput">buildArgsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs">buildArgs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildArgsInput`<sup>Optional</sup> <a name="buildArgsInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildArgsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `buildArgs`<sup>Required</sup> <a name="buildArgs" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.buildArgs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBuildArgs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference;

new GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive">resetSourceArchive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceArchive` <a name="resetSourceArchive" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.resetSourceArchive"></a>

```java
public void resetSourceArchive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput">sourceArchiveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive">sourceArchive</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceArchiveInput`<sup>Optional</sup> <a name="sourceArchiveInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchiveInput"></a>

```java
public java.lang.String getSourceArchiveInput();
```

- *Type:* java.lang.String

---

##### `sourceArchive`<sup>Required</sup> <a name="sourceArchive" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.sourceArchive"></a>

```java
public java.lang.String getSourceArchive();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference;

new GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource">putDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec">putImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource">putInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec">putPythonSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource">resetDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec">resetImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource">resetInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec">resetPythonSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeveloperConnectSource` <a name="putDeveloperConnectSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource"></a>

```java
public void putDeveloperConnectSource(GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putDeveloperConnectSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---

##### `putImageSpec` <a name="putImageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec"></a>

```java
public void putImageSpec(GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putImageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---

##### `putInlineSource` <a name="putInlineSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource"></a>

```java
public void putInlineSource(GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putInlineSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---

##### `putPythonSpec` <a name="putPythonSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec"></a>

```java
public void putPythonSpec(GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.putPythonSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---

##### `resetDeveloperConnectSource` <a name="resetDeveloperConnectSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetDeveloperConnectSource"></a>

```java
public void resetDeveloperConnectSource()
```

##### `resetImageSpec` <a name="resetImageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetImageSpec"></a>

```java
public void resetImageSpec()
```

##### `resetInlineSource` <a name="resetInlineSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetInlineSource"></a>

```java
public void resetInlineSource()
```

##### `resetPythonSpec` <a name="resetPythonSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.resetPythonSpec"></a>

```java
public void resetPythonSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource">developerConnectSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec">imageSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource">inlineSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec">pythonSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput">developerConnectSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput">imageSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput">inlineSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput">pythonSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `developerConnectSource`<sup>Required</sup> <a name="developerConnectSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSource"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference getDeveloperConnectSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSourceOutputReference</a>

---

##### `imageSpec`<sup>Required</sup> <a name="imageSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference getImageSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpecOutputReference</a>

---

##### `inlineSource`<sup>Required</sup> <a name="inlineSource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSource"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference getInlineSource();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSourceOutputReference</a>

---

##### `pythonSpec`<sup>Required</sup> <a name="pythonSpec" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpec"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference getPythonSpec();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference</a>

---

##### `developerConnectSourceInput`<sup>Optional</sup> <a name="developerConnectSourceInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.developerConnectSourceInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource getDeveloperConnectSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecDeveloperConnectSource</a>

---

##### `imageSpecInput`<sup>Optional</sup> <a name="imageSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.imageSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec getImageSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecImageSpec</a>

---

##### `inlineSourceInput`<sup>Optional</sup> <a name="inlineSourceInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.inlineSourceInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource getInlineSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource">GoogleVertexAiReasoningEngineSpecSourceCodeSpecInlineSource</a>

---

##### `pythonSpecInput`<sup>Optional</sup> <a name="pythonSpecInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.pythonSpecInput"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec getPythonSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpec</a>

---


### GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference <a name="GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference;

new GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule">resetEntrypointModule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject">resetEntrypointObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile">resetRequirementsFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEntrypointModule` <a name="resetEntrypointModule" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointModule"></a>

```java
public void resetEntrypointModule()
```

##### `resetEntrypointObject` <a name="resetEntrypointObject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetEntrypointObject"></a>

```java
public void resetEntrypointObject()
```

##### `resetRequirementsFile` <a name="resetRequirementsFile" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetRequirementsFile"></a>

```java
public void resetRequirementsFile()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput">entrypointModuleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput">entrypointObjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput">requirementsFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule">entrypointModule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject">entrypointObject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile">requirementsFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entrypointModuleInput`<sup>Optional</sup> <a name="entrypointModuleInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModuleInput"></a>

```java
public java.lang.String getEntrypointModuleInput();
```

- *Type:* java.lang.String

---

##### `entrypointObjectInput`<sup>Optional</sup> <a name="entrypointObjectInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObjectInput"></a>

```java
public java.lang.String getEntrypointObjectInput();
```

- *Type:* java.lang.String

---

##### `requirementsFileInput`<sup>Optional</sup> <a name="requirementsFileInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFileInput"></a>

```java
public java.lang.String getRequirementsFileInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `entrypointModule`<sup>Required</sup> <a name="entrypointModule" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointModule"></a>

```java
public java.lang.String getEntrypointModule();
```

- *Type:* java.lang.String

---

##### `entrypointObject`<sup>Required</sup> <a name="entrypointObject" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.entrypointObject"></a>

```java
public java.lang.String getEntrypointObject();
```

- *Type:* java.lang.String

---

##### `requirementsFile`<sup>Required</sup> <a name="requirementsFile" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.requirementsFile"></a>

```java
public java.lang.String getRequirementsFile();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpecOutputReference.property.internalValue"></a>

```java
public GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec">GoogleVertexAiReasoningEngineSpecSourceCodeSpecPythonSpec</a>

---


### GoogleVertexAiReasoningEngineTimeoutsOutputReference <a name="GoogleVertexAiReasoningEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_reasoning_engine.GoogleVertexAiReasoningEngineTimeoutsOutputReference;

new GoogleVertexAiReasoningEngineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiReasoningEngineTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiReasoningEngine.GoogleVertexAiReasoningEngineTimeouts">GoogleVertexAiReasoningEngineTimeouts</a>

---



