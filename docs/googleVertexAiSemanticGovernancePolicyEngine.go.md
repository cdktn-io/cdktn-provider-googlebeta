# `googleVertexAiSemanticGovernancePolicyEngine` Submodule <a name="`googleVertexAiSemanticGovernancePolicyEngine` Submodule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiSemanticGovernancePolicyEngine <a name="GoogleVertexAiSemanticGovernancePolicyEngine" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine google_vertex_ai_semantic_governance_policy_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

googlevertexaisemanticgovernancepolicyengine.NewGoogleVertexAiSemanticGovernancePolicyEngine(scope Construct, id *string, config GoogleVertexAiSemanticGovernancePolicyEngineConfig) GoogleVertexAiSemanticGovernancePolicyEngine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig">GoogleVertexAiSemanticGovernancePolicyEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig">GoogleVertexAiSemanticGovernancePolicyEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiSemanticGovernancePolicyEngineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

googlevertexaisemanticgovernancepolicyengine.GoogleVertexAiSemanticGovernancePolicyEngine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

googlevertexaisemanticgovernancepolicyengine.GoogleVertexAiSemanticGovernancePolicyEngine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

googlevertexaisemanticgovernancepolicyengine.GoogleVertexAiSemanticGovernancePolicyEngine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

googlevertexaisemanticgovernancepolicyengine.GoogleVertexAiSemanticGovernancePolicyEngine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiSemanticGovernancePolicyEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiSemanticGovernancePolicyEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiSemanticGovernancePolicyEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule">PscForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment">PscServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PscForwardingRule`<sup>Required</sup> <a name="PscForwardingRule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule"></a>

```go
func PscForwardingRule() *string
```

- *Type:* *string

---

##### `PscServiceAttachment`<sup>Required</sup> <a name="PscServiceAttachment" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment"></a>

```go
func PscServiceAttachment() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiSemanticGovernancePolicyEngineConfig <a name="GoogleVertexAiSemanticGovernancePolicyEngineConfig" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

&googlevertexaisemanticgovernancepolicyengine.GoogleVertexAiSemanticGovernancePolicyEngineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeletionPolicy: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.region">Region</a></code> | <code>*string</code> | The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#deletion_policy GoogleVertexAiSemanticGovernancePolicyEngine#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#region GoogleVertexAiSemanticGovernancePolicyEngine#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiSemanticGovernancePolicyEngineTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#timeouts GoogleVertexAiSemanticGovernancePolicyEngine#timeouts}

---

### GoogleVertexAiSemanticGovernancePolicyEngineTimeouts <a name="GoogleVertexAiSemanticGovernancePolicyEngineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

&googlevertexaisemanticgovernancepolicyengine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#create GoogleVertexAiSemanticGovernancePolicyEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#delete GoogleVertexAiSemanticGovernancePolicyEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#update GoogleVertexAiSemanticGovernancePolicyEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#create GoogleVertexAiSemanticGovernancePolicyEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#delete GoogleVertexAiSemanticGovernancePolicyEngine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_semantic_governance_policy_engine#update GoogleVertexAiSemanticGovernancePolicyEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaisemanticgovernancepolicyengine"

googlevertexaisemanticgovernancepolicyengine.NewGoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



