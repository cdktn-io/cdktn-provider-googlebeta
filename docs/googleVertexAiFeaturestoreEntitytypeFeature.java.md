# `googleVertexAiFeaturestoreEntitytypeFeature` Submodule <a name="`googleVertexAiFeaturestoreEntitytypeFeature` Submodule" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeature <a name="GoogleVertexAiFeaturestoreEntitytypeFeature" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature google_vertex_ai_featurestore_entitytype_feature}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeature;

GoogleVertexAiFeaturestoreEntitytypeFeature.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entitytype(java.lang.String)
    .valueType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .timeouts(GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.entitytype">entitytype</a></code> | <code>java.lang.String</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.entitytype"></a>

- *Type:* java.lang.String

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#entitytype GoogleVertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#value_type GoogleVertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#description GoogleVertexAiFeaturestoreEntitytypeFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#labels GoogleVertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#name GoogleVertexAiFeaturestoreEntitytypeFeature#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#timeouts GoogleVertexAiFeaturestoreEntitytypeFeature#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts"></a>

```java
public void putTimeouts(GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiFeaturestoreEntitytypeFeature resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeature;

GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeature;

GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeature;

GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeature;

GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleVertexAiFeaturestoreEntitytypeFeature resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleVertexAiFeaturestoreEntitytypeFeature to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleVertexAiFeaturestoreEntitytypeFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestoreEntitytypeFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput">entitytypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytype">entitytype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeouts"></a>

```java
public GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entitytypeInput`<sup>Optional</sup> <a name="entitytypeInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytypeInput"></a>

```java
public java.lang.String getEntitytypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.timeoutsInput"></a>

```java
public IResolvable|GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.entitytype"></a>

```java
public java.lang.String getEntitytype();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeature.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeatureConfig <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureConfig" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig;

GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .entitytype(java.lang.String)
    .valueType(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .timeouts(GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype">entitytype</a></code> | <code>java.lang.String</code> | The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A set of key/value label pairs to assign to the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the feature. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entitytype`<sup>Required</sup> <a name="entitytype" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.entitytype"></a>

```java
public java.lang.String getEntitytype();
```

- *Type:* java.lang.String

The name of the Featurestore to use, in the format projects/{project}/locations/{location}/featurestores/{featurestore}/entityTypes/{entitytype}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#entitytype GoogleVertexAiFeaturestoreEntitytypeFeature#entitytype}

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Type of Feature value. Immutable. https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.featurestores.entityTypes.features#ValueType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#value_type GoogleVertexAiFeaturestoreEntitytypeFeature#value_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#description GoogleVertexAiFeaturestoreEntitytypeFeature#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#id GoogleVertexAiFeaturestoreEntitytypeFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A set of key/value label pairs to assign to the feature.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#labels GoogleVertexAiFeaturestoreEntitytypeFeature#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the feature.

The feature can be up to 64 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscore(_), and ASCII digits 0-9 starting with a letter. The value will be unique given an entity type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#name GoogleVertexAiFeaturestoreEntitytypeFeature#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureConfig.property.timeouts"></a>

```java
public GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#timeouts GoogleVertexAiFeaturestoreEntitytypeFeature#timeouts}

---

### GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts;

GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#create GoogleVertexAiFeaturestoreEntitytypeFeature#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#delete GoogleVertexAiFeaturestoreEntitytypeFeature#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#update GoogleVertexAiFeaturestoreEntitytypeFeature#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#create GoogleVertexAiFeaturestoreEntitytypeFeature#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#delete GoogleVertexAiFeaturestoreEntitytypeFeature#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_vertex_ai_featurestore_entitytype_feature#update GoogleVertexAiFeaturestoreEntitytypeFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference <a name="GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_vertex_ai_featurestore_entitytype_feature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference;

new GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiFeaturestoreEntitytypeFeature.GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts">GoogleVertexAiFeaturestoreEntitytypeFeatureTimeouts</a>

---



