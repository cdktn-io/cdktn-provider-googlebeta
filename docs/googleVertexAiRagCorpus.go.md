# `googleVertexAiRagCorpus` Submodule <a name="`googleVertexAiRagCorpus` Submodule" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiRagCorpus <a name="GoogleVertexAiRagCorpus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus google_vertex_ai_rag_corpus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpus(scope Construct, id *string, config GoogleVertexAiRagCorpusConfig) GoogleVertexAiRagCorpus
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig">GoogleVertexAiRagCorpusConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig">GoogleVertexAiRagCorpusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig">PutVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig">PutVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig">ResetVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig">ResetVertexAiSearchConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiRagCorpusEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiRagCorpusTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

---

##### `PutVectorDbConfig` <a name="PutVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig"></a>

```go
func PutVectorDbConfig(value GoogleVertexAiRagCorpusVectorDbConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVectorDbConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---

##### `PutVertexAiSearchConfig` <a name="PutVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig"></a>

```go
func PutVertexAiSearchConfig(value GoogleVertexAiRagCorpusVertexAiSearchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.putVertexAiSearchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVectorDbConfig` <a name="ResetVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVectorDbConfig"></a>

```go
func ResetVectorDbConfig()
```

##### `ResetVertexAiSearchConfig` <a name="ResetVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.resetVertexAiSearchConfig"></a>

```go
func ResetVertexAiSearchConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.GoogleVertexAiRagCorpus_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.GoogleVertexAiRagCorpus_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.GoogleVertexAiRagCorpus_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.GoogleVertexAiRagCorpus_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiRagCorpus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiRagCorpus to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiRagCorpus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiRagCorpus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus">CorpusStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput">VectorDbConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput">VertexAiSearchConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CorpusStatus`<sup>Required</sup> <a name="CorpusStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.corpusStatus"></a>

```go
func CorpusStatus() GoogleVertexAiRagCorpusCorpusStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList">GoogleVertexAiRagCorpusCorpusStatusList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiRagCorpusEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference">GoogleVertexAiRagCorpusEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiRagCorpusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference">GoogleVertexAiRagCorpusTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VectorDbConfig`<sup>Required</sup> <a name="VectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfig"></a>

```go
func VectorDbConfig() GoogleVertexAiRagCorpusVectorDbConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigOutputReference</a>

---

##### `VertexAiSearchConfig`<sup>Required</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfig"></a>

```go
func VertexAiSearchConfig() GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference">GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VectorDbConfigInput`<sup>Optional</sup> <a name="VectorDbConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vectorDbConfigInput"></a>

```go
func VectorDbConfigInput() GoogleVertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---

##### `VertexAiSearchConfigInput`<sup>Optional</sup> <a name="VertexAiSearchConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.vertexAiSearchConfigInput"></a>

```go
func VertexAiSearchConfigInput() GoogleVertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpus.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiRagCorpusConfig <a name="GoogleVertexAiRagCorpusConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Region: *string,
	DeletionPolicy: *string,
	Description: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts,
	VectorDbConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig,
	VertexAiSearchConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region">Region</a></code> | <code>*string</code> | The region of the RagCorpus. eg europe-west4. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description">Description</a></code> | <code>*string</code> | Optional. The description of the RagCorpus. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig">VectorDbConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | vector_db_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig">VertexAiSearchConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | vertex_ai_search_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required.

The display name of the RagCorpus. The name can be up to 128
characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#display_name GoogleVertexAiRagCorpus#display_name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the RagCorpus. eg europe-west4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#region GoogleVertexAiRagCorpus#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#deletion_policy GoogleVertexAiRagCorpus#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. The description of the RagCorpus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#description GoogleVertexAiRagCorpus#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#encryption_spec GoogleVertexAiRagCorpus#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#id GoogleVertexAiRagCorpus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#project GoogleVertexAiRagCorpus#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiRagCorpusTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts">GoogleVertexAiRagCorpusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#timeouts GoogleVertexAiRagCorpus#timeouts}

---

##### `VectorDbConfig`<sup>Optional</sup> <a name="VectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vectorDbConfig"></a>

```go
VectorDbConfig GoogleVertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

vector_db_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vector_db_config GoogleVertexAiRagCorpus#vector_db_config}

---

##### `VertexAiSearchConfig`<sup>Optional</sup> <a name="VertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusConfig.property.vertexAiSearchConfig"></a>

```go
VertexAiSearchConfig GoogleVertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

vertex_ai_search_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_ai_search_config GoogleVertexAiRagCorpus#vertex_ai_search_config}

---

### GoogleVertexAiRagCorpusCorpusStatus <a name="GoogleVertexAiRagCorpusCorpusStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusCorpusStatus {

}
```


### GoogleVertexAiRagCorpusEncryptionSpec <a name="GoogleVertexAiRagCorpusEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Required.

The Cloud KMS resource identifier of the customer managed
encryption key used to protect the resource. Has the form:
projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key.
The key needs to be in the same region as where the resource is
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#kms_key_name GoogleVertexAiRagCorpus#kms_key_name}

---

### GoogleVertexAiRagCorpusTimeouts <a name="GoogleVertexAiRagCorpusTimeouts" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#create GoogleVertexAiRagCorpus#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#delete GoogleVertexAiRagCorpus#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#update GoogleVertexAiRagCorpus#update}.

---

### GoogleVertexAiRagCorpusVectorDbConfig <a name="GoogleVertexAiRagCorpusVectorDbConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfig {
	ApiAuth: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth,
	Pinecone: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone,
	RagEmbeddingModelConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig,
	RagManagedDb: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb,
	VertexVectorSearch: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | api_auth block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | pinecone block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | rag_embedding_model_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | rag_managed_db block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | vertex_vector_search block. |

---

##### `ApiAuth`<sup>Optional</sup> <a name="ApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.apiAuth"></a>

```go
ApiAuth GoogleVertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

api_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_auth GoogleVertexAiRagCorpus#api_auth}

---

##### `Pinecone`<sup>Optional</sup> <a name="Pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.pinecone"></a>

```go
Pinecone GoogleVertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

pinecone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#pinecone GoogleVertexAiRagCorpus#pinecone}

---

##### `RagEmbeddingModelConfig`<sup>Optional</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragEmbeddingModelConfig"></a>

```go
RagEmbeddingModelConfig GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

rag_embedding_model_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_embedding_model_config GoogleVertexAiRagCorpus#rag_embedding_model_config}

---

##### `RagManagedDb`<sup>Optional</sup> <a name="RagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.ragManagedDb"></a>

```go
RagManagedDb GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

rag_managed_db block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#rag_managed_db GoogleVertexAiRagCorpus#rag_managed_db}

---

##### `VertexVectorSearch`<sup>Optional</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig.property.vertexVectorSearch"></a>

```go
VertexVectorSearch GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

vertex_vector_search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_vector_search GoogleVertexAiRagCorpus#vertex_vector_search}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuth <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth {
	ApiKeyConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | api_key_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth.property.apiKeyConfig"></a>

```go
ApiKeyConfig GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_config GoogleVertexAiRagCorpus#api_key_config}

---

### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig {
	ApiKeySecretVersion: *string,
	ApiKeyString: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>*string</code> | The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString">ApiKeyString</a></code> | <code>*string</code> | The API key string. |

---

##### `ApiKeySecretVersion`<sup>Optional</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeySecretVersion"></a>

```go
ApiKeySecretVersion *string
```

- *Type:* *string

The SecretManager secret version resource name storing API key. e.g. projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_secret_version GoogleVertexAiRagCorpus#api_key_secret_version}

---

##### `ApiKeyString`<sup>Optional</sup> <a name="ApiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig.property.apiKeyString"></a>

```go
ApiKeyString *string
```

- *Type:* *string

The API key string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#api_key_string GoogleVertexAiRagCorpus#api_key_string}

---

### GoogleVertexAiRagCorpusVectorDbConfigPinecone <a name="GoogleVertexAiRagCorpusVectorDbConfigPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone {
	IndexName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName">IndexName</a></code> | <code>*string</code> | Pinecone index name. This value cannot be changed after it's set. |

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone.property.indexName"></a>

```go
IndexName *string
```

- *Type:* *string

Pinecone index name. This value cannot be changed after it's set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_name GoogleVertexAiRagCorpus#index_name}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig {
	VertexPredictionEndpoint: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | vertex_prediction_endpoint block. |

---

##### `VertexPredictionEndpoint`<sup>Optional</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig.property.vertexPredictionEndpoint"></a>

```go
VertexPredictionEndpoint GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

vertex_prediction_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#vertex_prediction_endpoint GoogleVertexAiRagCorpus#vertex_prediction_endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint {
	Endpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint">Endpoint</a></code> | <code>*string</code> | Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}. |

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Required. The endpoint resource name. Format: projects/{project}/locations/{location}/publishers/{publisher}/models/{model} or projects/{project}/locations/{location}/endpoints/{endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#endpoint GoogleVertexAiRagCorpus#endpoint}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb {
	Ann: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn,
	Knn: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | ann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | knn block. |

---

##### `Ann`<sup>Optional</sup> <a name="Ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.ann"></a>

```go
Ann GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

ann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#ann GoogleVertexAiRagCorpus#ann}

---

##### `Knn`<sup>Optional</sup> <a name="Knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb.property.knn"></a>

```go
Knn GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

knn block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#knn GoogleVertexAiRagCorpus#knn}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn {
	LeafCount: *f64,
	TreeDepth: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount">LeafCount</a></code> | <code>*f64</code> | Number of leaf nodes in the tree-based structure. Default value is 500. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth">TreeDepth</a></code> | <code>*f64</code> | The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2. |

---

##### `LeafCount`<sup>Optional</sup> <a name="LeafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.leafCount"></a>

```go
LeafCount *f64
```

- *Type:* *f64

Number of leaf nodes in the tree-based structure. Default value is 500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#leaf_count GoogleVertexAiRagCorpus#leaf_count}

---

##### `TreeDepth`<sup>Optional</sup> <a name="TreeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn.property.treeDepth"></a>

```go
TreeDepth *f64
```

- *Type:* *f64

The depth of the tree-based structure. Only depth values of 2 and 3 are supported. Default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#tree_depth GoogleVertexAiRagCorpus#tree_depth}

---

### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn {

}
```


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch {
	Index: *string,
	IndexEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index">Index</a></code> | <code>*string</code> | The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.index"></a>

```go
Index *string
```

- *Type:* *string

The resource name of the Index. Format: projects/{project}/locations/{location}/indexes/{index}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index GoogleVertexAiRagCorpus#index}

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch.property.indexEndpoint"></a>

```go
IndexEndpoint *string
```

- *Type:* *string

The resource name of the Index Endpoint. Format: projects/{project}/locations/{location}/indexEndpoints/{index_endpoint}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#index_endpoint GoogleVertexAiRagCorpus#index_endpoint}

---

### GoogleVertexAiRagCorpusVertexAiSearchConfig <a name="GoogleVertexAiRagCorpusVertexAiSearchConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

&googlevertexairagcorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig {
	ServingConfig: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig">ServingConfig</a></code> | <code>*string</code> | Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}. |

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig.property.servingConfig"></a>

```go
ServingConfig *string
```

- *Type:* *string

Vertex AI Search Serving Config resource full name. For example, projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config} or projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/servingConfigs/{serving_config}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_rag_corpus#serving_config GoogleVertexAiRagCorpus#serving_config}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiRagCorpusCorpusStatusList <a name="GoogleVertexAiRagCorpusCorpusStatusList" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusCorpusStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiRagCorpusCorpusStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get"></a>

```go
func Get(index *f64) GoogleVertexAiRagCorpusCorpusStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiRagCorpusCorpusStatusOutputReference <a name="GoogleVertexAiRagCorpusCorpusStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusCorpusStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiRagCorpusCorpusStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus">ErrorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ErrorStatus`<sup>Required</sup> <a name="ErrorStatus" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.errorStatus"></a>

```go
func ErrorStatus() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusCorpusStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusCorpusStatus">GoogleVertexAiRagCorpusCorpusStatus</a>

---


### GoogleVertexAiRagCorpusEncryptionSpecOutputReference <a name="GoogleVertexAiRagCorpusEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusEncryptionSpec">GoogleVertexAiRagCorpusEncryptionSpec</a>

---


### GoogleVertexAiRagCorpusTimeoutsOutputReference <a name="GoogleVertexAiRagCorpusTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion">ResetApiKeySecretVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString">ResetApiKeyString</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeySecretVersion` <a name="ResetApiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeySecretVersion"></a>

```go
func ResetApiKeySecretVersion()
```

##### `ResetApiKeyString` <a name="ResetApiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.resetApiKeyString"></a>

```go
func ResetApiKeyString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput">ApiKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput">ApiKeyStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion">ApiKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString">ApiKeyString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeySecretVersionInput`<sup>Optional</sup> <a name="ApiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```go
func ApiKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `ApiKeyStringInput`<sup>Optional</sup> <a name="ApiKeyStringInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyStringInput"></a>

```go
func ApiKeyStringInput() *string
```

- *Type:* *string

---

##### `ApiKeySecretVersion`<sup>Required</sup> <a name="ApiKeySecretVersion" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```go
func ApiKeySecretVersion() *string
```

- *Type:* *string

---

##### `ApiKeyString`<sup>Required</sup> <a name="ApiKeyString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.apiKeyString"></a>

```go
func ApiKeyString() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig"></a>

```go
func PutApiKeyConfig(value GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.resetApiKeyConfig"></a>

```go
func ResetApiKeyConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfig"></a>

```go
func ApiKeyConfig() GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.apiKeyConfigInput"></a>

```go
func ApiKeyConfigInput() GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig">GoogleVertexAiRagCorpusVectorDbConfigApiAuthApiKeyConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth">PutApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone">PutPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig">PutRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb">PutRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch">PutVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth">ResetApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone">ResetPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig">ResetRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb">ResetRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch">ResetVertexVectorSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiAuth` <a name="PutApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth"></a>

```go
func PutApiAuth(value GoogleVertexAiRagCorpusVectorDbConfigApiAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putApiAuth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PutPinecone` <a name="PutPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone"></a>

```go
func PutPinecone(value GoogleVertexAiRagCorpusVectorDbConfigPinecone)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putPinecone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `PutRagEmbeddingModelConfig` <a name="PutRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig"></a>

```go
func PutRagEmbeddingModelConfig(value GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagEmbeddingModelConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `PutRagManagedDb` <a name="PutRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb"></a>

```go
func PutRagManagedDb(value GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putRagManagedDb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `PutVertexVectorSearch` <a name="PutVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch"></a>

```go
func PutVertexVectorSearch(value GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.putVertexVectorSearch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `ResetApiAuth` <a name="ResetApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetApiAuth"></a>

```go
func ResetApiAuth()
```

##### `ResetPinecone` <a name="ResetPinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetPinecone"></a>

```go
func ResetPinecone()
```

##### `ResetRagEmbeddingModelConfig` <a name="ResetRagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagEmbeddingModelConfig"></a>

```go
func ResetRagEmbeddingModelConfig()
```

##### `ResetRagManagedDb` <a name="ResetRagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetRagManagedDb"></a>

```go
func ResetRagManagedDb()
```

##### `ResetVertexVectorSearch` <a name="ResetVertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.resetVertexVectorSearch"></a>

```go
func ResetVertexVectorSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth">ApiAuth</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone">Pinecone</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig">RagEmbeddingModelConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb">RagManagedDb</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch">VertexVectorSearch</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput">ApiAuthInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput">PineconeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput">RagEmbeddingModelConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput">RagManagedDbInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput">VertexVectorSearchInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiAuth`<sup>Required</sup> <a name="ApiAuth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuth"></a>

```go
func ApiAuth() GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference">GoogleVertexAiRagCorpusVectorDbConfigApiAuthOutputReference</a>

---

##### `Pinecone`<sup>Required</sup> <a name="Pinecone" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pinecone"></a>

```go
func Pinecone() GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference">GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference</a>

---

##### `RagEmbeddingModelConfig`<sup>Required</sup> <a name="RagEmbeddingModelConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfig"></a>

```go
func RagEmbeddingModelConfig() GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference</a>

---

##### `RagManagedDb`<sup>Required</sup> <a name="RagManagedDb" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDb"></a>

```go
func RagManagedDb() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference</a>

---

##### `VertexVectorSearch`<sup>Required</sup> <a name="VertexVectorSearch" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearch"></a>

```go
func VertexVectorSearch() GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference</a>

---

##### `ApiAuthInput`<sup>Optional</sup> <a name="ApiAuthInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.apiAuthInput"></a>

```go
func ApiAuthInput() GoogleVertexAiRagCorpusVectorDbConfigApiAuth
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigApiAuth">GoogleVertexAiRagCorpusVectorDbConfigApiAuth</a>

---

##### `PineconeInput`<sup>Optional</sup> <a name="PineconeInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.pineconeInput"></a>

```go
func PineconeInput() GoogleVertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---

##### `RagEmbeddingModelConfigInput`<sup>Optional</sup> <a name="RagEmbeddingModelConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragEmbeddingModelConfigInput"></a>

```go
func RagEmbeddingModelConfigInput() GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---

##### `RagManagedDbInput`<sup>Optional</sup> <a name="RagManagedDbInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.ragManagedDbInput"></a>

```go
func RagManagedDbInput() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---

##### `VertexVectorSearchInput`<sup>Optional</sup> <a name="VertexVectorSearchInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.vertexVectorSearchInput"></a>

```go
func VertexVectorSearchInput() GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfig">GoogleVertexAiRagCorpusVectorDbConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName">IndexName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexNameInput"></a>

```go
func IndexNameInput() *string
```

- *Type:* *string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.indexName"></a>

```go
func IndexName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPineconeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigPinecone
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigPinecone">GoogleVertexAiRagCorpusVectorDbConfigPinecone</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint">PutVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint">ResetVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVertexPredictionEndpoint` <a name="PutVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint"></a>

```go
func PutVertexPredictionEndpoint(value GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.putVertexPredictionEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `ResetVertexPredictionEndpoint` <a name="ResetVertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.resetVertexPredictionEndpoint"></a>

```go
func ResetVertexPredictionEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint">VertexPredictionEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput">VertexPredictionEndpointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VertexPredictionEndpoint`<sup>Required</sup> <a name="VertexPredictionEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpoint"></a>

```go
func VertexPredictionEndpoint() GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference</a>

---

##### `VertexPredictionEndpointInput`<sup>Optional</sup> <a name="VertexPredictionEndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.vertexPredictionEndpointInput"></a>

```go
func VertexPredictionEndpointInput() GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfig</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model">Model</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId">ModelVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.model"></a>

```go
func Model() *string
```

- *Type:* *string

---

##### `ModelVersionId`<sup>Required</sup> <a name="ModelVersionId" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.modelVersionId"></a>

```go
func ModelVersionId() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint">GoogleVertexAiRagCorpusVectorDbConfigRagEmbeddingModelConfigVertexPredictionEndpoint</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount">ResetLeafCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth">ResetTreeDepth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLeafCount` <a name="ResetLeafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetLeafCount"></a>

```go
func ResetLeafCount()
```

##### `ResetTreeDepth` <a name="ResetTreeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.resetTreeDepth"></a>

```go
func ResetTreeDepth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput">LeafCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput">TreeDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount">LeafCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth">TreeDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LeafCountInput`<sup>Optional</sup> <a name="LeafCountInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCountInput"></a>

```go
func LeafCountInput() *f64
```

- *Type:* *f64

---

##### `TreeDepthInput`<sup>Optional</sup> <a name="TreeDepthInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepthInput"></a>

```go
func TreeDepthInput() *f64
```

- *Type:* *f64

---

##### `LeafCount`<sup>Required</sup> <a name="LeafCount" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.leafCount"></a>

```go
func LeafCount() *f64
```

- *Type:* *f64

---

##### `TreeDepth`<sup>Required</sup> <a name="TreeDepth" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.treeDepth"></a>

```go
func TreeDepth() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn">PutAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn">PutKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn">ResetAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn">ResetKnn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnn` <a name="PutAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn"></a>

```go
func PutAnn(value GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putAnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `PutKnn` <a name="PutKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn"></a>

```go
func PutKnn(value GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.putKnn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `ResetAnn` <a name="ResetAnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetAnn"></a>

```go
func ResetAnn()
```

##### `ResetKnn` <a name="ResetKnn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.resetKnn"></a>

```go
func ResetKnn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann">Ann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn">Knn</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput">AnnInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput">KnnInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ann`<sup>Required</sup> <a name="Ann" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.ann"></a>

```go
func Ann() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnnOutputReference</a>

---

##### `Knn`<sup>Required</sup> <a name="Knn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knn"></a>

```go
func Knn() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnnOutputReference</a>

---

##### `AnnInput`<sup>Optional</sup> <a name="AnnInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.annInput"></a>

```go
func AnnInput() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbAnn</a>

---

##### `KnnInput`<sup>Optional</sup> <a name="KnnInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.knnInput"></a>

```go
func KnnInput() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbKnn</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDbOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb">GoogleVertexAiRagCorpusVectorDbConfigRagManagedDb</a>

---


### GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference <a name="GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput">IndexEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint">IndexEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IndexEndpointInput`<sup>Optional</sup> <a name="IndexEndpointInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpointInput"></a>

```go
func IndexEndpointInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `IndexEndpoint`<sup>Required</sup> <a name="IndexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.indexEndpoint"></a>

```go
func IndexEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch">GoogleVertexAiRagCorpusVectorDbConfigVertexVectorSearch</a>

---


### GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference <a name="GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googlevertexairagcorpus"

googlevertexairagcorpus.NewGoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput">ServingConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig">ServingConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServingConfigInput`<sup>Optional</sup> <a name="ServingConfigInput" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfigInput"></a>

```go
func ServingConfigInput() *string
```

- *Type:* *string

---

##### `ServingConfig`<sup>Required</sup> <a name="ServingConfig" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.servingConfig"></a>

```go
func ServingConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiRagCorpusVertexAiSearchConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiRagCorpus.GoogleVertexAiRagCorpusVertexAiSearchConfig">GoogleVertexAiRagCorpusVertexAiSearchConfig</a>

---



