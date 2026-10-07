# `googleObservabilityBucket` Submodule <a name="`googleObservabilityBucket` Submodule" id="@cdktn/provider-google-beta.googleObservabilityBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleObservabilityBucket <a name="GoogleObservabilityBucket" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket google_observability_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

googleobservabilitybucket.NewGoogleObservabilityBucket(scope Construct, id *string, config GoogleObservabilityBucketConfig) GoogleObservabilityBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig">GoogleObservabilityBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig">GoogleObservabilityBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putCmekSettings"></a>

```go
func PutCmekSettings(value GoogleObservabilityBucketCmekSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putTimeouts"></a>

```go
func PutTimeouts(value GoogleObservabilityBucketTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a>

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetCmekSettings"></a>

```go
func ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleObservabilityBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

googleobservabilitybucket.GoogleObservabilityBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

googleobservabilitybucket.GoogleObservabilityBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

googleobservabilitybucket.GoogleObservabilityBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

googleobservabilitybucket.GoogleObservabilityBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleObservabilityBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleObservabilityBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleObservabilityBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleObservabilityBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference">GoogleObservabilityBucketCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.purgeTime">PurgeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference">GoogleObservabilityBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketIdInput">BucketIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketId">BucketId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettings"></a>

```go
func CmekSettings() GoogleObservabilityBucketCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference">GoogleObservabilityBucketCmekSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PurgeTime`<sup>Required</sup> <a name="PurgeTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.purgeTime"></a>

```go
func PurgeTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeouts"></a>

```go
func Timeouts() GoogleObservabilityBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference">GoogleObservabilityBucketTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketIdInput"></a>

```go
func BucketIdInput() *string
```

- *Type:* *string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.cmekSettingsInput"></a>

```go
func CmekSettingsInput() GoogleObservabilityBucketCmekSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.bucketId"></a>

```go
func BucketId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleObservabilityBucketCmekSettings <a name="GoogleObservabilityBucketCmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

&googleobservabilitybucket.GoogleObservabilityBucketCmekSettings {
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The resource name for the configured Cloud KMS key. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The resource name for the configured Cloud KMS key. The format is: projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#kms_key GoogleObservabilityBucket#kms_key}

---

### GoogleObservabilityBucketConfig <a name="GoogleObservabilityBucketConfig" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

&googleobservabilitybucket.GoogleObservabilityBucketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BucketId: *string,
	Location: *string,
	CmekSettings: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21.googleObservabilityBucket.GoogleObservabilityBucketTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.bucketId">BucketId</a></code> | <code>*string</code> | A client-assigned identifier for the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.location">Location</a></code> | <code>*string</code> | The location of the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.description">Description</a></code> | <code>*string</code> | Description of the bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User friendly display name. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#id GoogleObservabilityBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#project GoogleObservabilityBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.bucketId"></a>

```go
BucketId *string
```

- *Type:* *string

A client-assigned identifier for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#bucket_id GoogleObservabilityBucket#bucket_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#location GoogleObservabilityBucket#location}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.cmekSettings"></a>

```go
CmekSettings GoogleObservabilityBucketCmekSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#cmek_settings GoogleObservabilityBucket#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#description GoogleObservabilityBucket#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#display_name GoogleObservabilityBucket#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#id GoogleObservabilityBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#project GoogleObservabilityBucket#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketConfig.property.timeouts"></a>

```go
Timeouts GoogleObservabilityBucketTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts">GoogleObservabilityBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#timeouts GoogleObservabilityBucket#timeouts}

---

### GoogleObservabilityBucketTimeouts <a name="GoogleObservabilityBucketTimeouts" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

&googleobservabilitybucket.GoogleObservabilityBucketTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#create GoogleObservabilityBucket#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#delete GoogleObservabilityBucket#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#update GoogleObservabilityBucket#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#create GoogleObservabilityBucket#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#delete GoogleObservabilityBucket#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_observability_bucket#update GoogleObservabilityBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleObservabilityBucketCmekSettingsOutputReference <a name="GoogleObservabilityBucketCmekSettingsOutputReference" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

googleobservabilitybucket.NewGoogleObservabilityBucketCmekSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleObservabilityBucketCmekSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyVersion"></a>

```go
func KmsKeyVersion() *string
```

- *Type:* *string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.serviceAccountId"></a>

```go
func ServiceAccountId() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleObservabilityBucketCmekSettings
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketCmekSettings">GoogleObservabilityBucketCmekSettings</a>

---


### GoogleObservabilityBucketTimeoutsOutputReference <a name="GoogleObservabilityBucketTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v21/googleobservabilitybucket"

googleobservabilitybucket.NewGoogleObservabilityBucketTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleObservabilityBucketTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleObservabilityBucket.GoogleObservabilityBucketTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



