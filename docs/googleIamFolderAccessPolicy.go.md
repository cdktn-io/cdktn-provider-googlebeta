# `googleIamFolderAccessPolicy` Submodule <a name="`googleIamFolderAccessPolicy` Submodule" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamFolderAccessPolicy <a name="GoogleIamFolderAccessPolicy" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy google_iam_folder_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicy(scope Construct, id *string, config GoogleIamFolderAccessPolicyConfig) GoogleIamFolderAccessPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig">GoogleIamFolderAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig">GoogleIamFolderAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.putDetails">PutDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetDetails">ResetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetails` <a name="PutDetails" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.putDetails"></a>

```go
func PutDetails(value GoogleIamFolderAccessPolicyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails">GoogleIamFolderAccessPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamFolderAccessPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts">GoogleIamFolderAccessPolicyTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDetails` <a name="ResetDetails" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetDetails"></a>

```go
func ResetDetails()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleIamFolderAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleIamFolderAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamFolderAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamFolderAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleIamFolderAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference">GoogleIamFolderAccessPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference">GoogleIamFolderAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.accessPolicyIdInput">AccessPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.detailsInput">DetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails">GoogleIamFolderAccessPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.folderInput">FolderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.folder">Folder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.details"></a>

```go
func Details() GoogleIamFolderAccessPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference">GoogleIamFolderAccessPolicyDetailsOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleIamFolderAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference">GoogleIamFolderAccessPolicyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccessPolicyIdInput`<sup>Optional</sup> <a name="AccessPolicyIdInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.accessPolicyIdInput"></a>

```go
func AccessPolicyIdInput() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DetailsInput`<sup>Optional</sup> <a name="DetailsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.detailsInput"></a>

```go
func DetailsInput() GoogleIamFolderAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails">GoogleIamFolderAccessPolicyDetails</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.folderInput"></a>

```go
func FolderInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.accessPolicyId"></a>

```go
func AccessPolicyId() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.folder"></a>

```go
func Folder() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamFolderAccessPolicyConfig <a name="GoogleIamFolderAccessPolicyConfig" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

&googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessPolicyId: *string,
	Folder: *string,
	Location: *string,
	Annotations: *map[string]*string,
	DeletionPolicy: *string,
	Details: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails,
	DisplayName: *string,
	Id: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.accessPolicyId">AccessPolicyId</a></code> | <code>*string</code> | The ID to use for the access policy, which will become the final component of the access policy's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.folder">Folder</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.details">Details</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails">GoogleIamFolderAccessPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The description of the access policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#id GoogleIamFolderAccessPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts">GoogleIamFolderAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.accessPolicyId"></a>

```go
AccessPolicyId *string
```

- *Type:* *string

The ID to use for the access policy, which will become the final component of the access policy's resource name.

This value must start with a lowercase letter followed by up to 62
lowercase letters, numbers, hyphens, or dots. Pattern,
/a-z{2,62}/.
This value must be unique among all access policies with the same parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#access_policy_id GoogleIamFolderAccessPolicy#access_policy_id}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.folder"></a>

```go
Folder *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#folder GoogleIamFolderAccessPolicy#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#location GoogleIamFolderAccessPolicy#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#annotations GoogleIamFolderAccessPolicy#annotations}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#deletion_policy GoogleIamFolderAccessPolicy#deletion_policy}

---

##### `Details`<sup>Optional</sup> <a name="Details" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.details"></a>

```go
Details GoogleIamFolderAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails">GoogleIamFolderAccessPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#details GoogleIamFolderAccessPolicy#details}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The description of the access policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#display_name GoogleIamFolderAccessPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#id GoogleIamFolderAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleIamFolderAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts">GoogleIamFolderAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#timeouts GoogleIamFolderAccessPolicy#timeouts}

---

### GoogleIamFolderAccessPolicyDetails <a name="GoogleIamFolderAccessPolicyDetails" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

&googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicyDetails {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#rules GoogleIamFolderAccessPolicy#rules}

---

### GoogleIamFolderAccessPolicyDetailsRules <a name="GoogleIamFolderAccessPolicyDetailsRules" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

&googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicyDetailsRules {
	Effect: *string,
	Operation: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation,
	Principals: *[]*string,
	Conditions: interface{},
	Description: *string,
	ExcludedPrincipals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.effect">Effect</a></code> | <code>*string</code> | The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"]. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation">GoogleIamFolderAccessPolicyDetailsRulesOperation</a></code> | operation block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.principals">Principals</a></code> | <code>*[]*string</code> | The identities for which this rule's effect governs using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.description">Description</a></code> | <code>*string</code> | Customer specified description of the rule. Must be less than or equal to 256 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>*[]*string</code> | The identities that are excluded from the access policy rule, even if they are listed in the 'principals'. |

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

The effect of the rule. Possible values: DENY ALLOW Possible values: ["DENY", "ALLOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#effect GoogleIamFolderAccessPolicy#effect}

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.operation"></a>

```go
Operation GoogleIamFolderAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation">GoogleIamFolderAccessPolicyDetailsRulesOperation</a>

operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#operation GoogleIamFolderAccessPolicy#operation}

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

The identities for which this rule's effect governs using one or more permissions on Google Cloud resources.

This field can contain the
following values:

* 'principal://goog/subject/{email_id}': A specific Google Account.
  Includes Gmail, Cloud Identity, and Google Workspace user accounts. For
  example, 'principal://goog/subject/alice@example.com'.
* 'principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}':
  A Google Cloud service account. For example,
  'principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com'.
* 'principalSet://goog/group/{group_id}': A Google group. For example,
  'principalSet://goog/group/admins@example.com'.
* 'principalSet://goog/cloudIdentityCustomerId/{customer_id}': All of the
  principals associated with the specified Google Workspace or Cloud
  Identity customer ID. For example,
  'principalSet://goog/cloudIdentityCustomerId/C01Abc35'.
  If an identifier that was previously set on a policy is soft deleted, then
  calls to read that policy will return the identifier with a deleted
  prefix. Users cannot set identifiers with this syntax.
* 'deleted:principal://goog/subject/{email_id}?uid={uid}': A specific
  Google Account that was deleted recently. For example,
  'deleted:principal://goog/subject/alice@example.com?uid=1234567890'. If
  the Google Account is recovered, this identifier reverts to the standard
  identifier for a Google Account.
* 'deleted:principalSet://goog/group/{group_id}?uid={uid}': A Google group
  that was deleted recently. For example,
  'deleted:principalSet://goog/group/admins@example.com?uid=1234567890'.
  If the Google group is restored, this identifier reverts to the standard
  identifier for a Google group.
* 'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/{service_account_id}?uid={uid}':
  A Google Cloud service account that was deleted recently. For example,
  'deleted:principal://iam.googleapis.com/projects/-/serviceAccounts/my-service-account@iam.gserviceaccount.com?uid=1234567890'.
  If the service account is undeleted, this identifier reverts to the
  standard identifier for a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#principals GoogleIamFolderAccessPolicy#principals}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#conditions GoogleIamFolderAccessPolicy#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Customer specified description of the rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#description GoogleIamFolderAccessPolicy#description}

---

##### `ExcludedPrincipals`<sup>Optional</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRules.property.excludedPrincipals"></a>

```go
ExcludedPrincipals *[]*string
```

- *Type:* *[]*string

The identities that are excluded from the access policy rule, even if they are listed in the 'principals'.

For example, you could add a Google
group to the 'principals', then exclude specific users who belong to
that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#excluded_principals GoogleIamFolderAccessPolicy#excluded_principals}

---

### GoogleIamFolderAccessPolicyDetailsRulesConditions <a name="GoogleIamFolderAccessPolicyDetailsRulesConditions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

&googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicyDetailsRulesConditions {
	Service: *string,
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditions.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#service GoogleIamFolderAccessPolicy#service}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditions.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditions.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#service GoogleIamFolderAccessPolicy#service}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditions.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#expression GoogleIamFolderAccessPolicy#expression}

---

### GoogleIamFolderAccessPolicyDetailsRulesOperation <a name="GoogleIamFolderAccessPolicyDetailsRulesOperation" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

&googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation {
	Permissions: *[]*string,
	ExcludedPermissions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The permissions that are explicitly affected by this rule. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation.property.excludedPermissions">ExcludedPermissions</a></code> | <code>*[]*string</code> | Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'. |

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The permissions that are explicitly affected by this rule.

Each
permission uses the format '{service_fqdn}/{resource}.{verb}', where
'{service_fqdn}' is the fully qualified domain name for the service.
Currently supported permissions are as follows:

* 'eventarc.googleapis.com/messageBuses.publish'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#permissions GoogleIamFolderAccessPolicy#permissions}

---

##### `ExcludedPermissions`<sup>Optional</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation.property.excludedPermissions"></a>

```go
ExcludedPermissions *[]*string
```

- *Type:* *[]*string

Specifies the permissions that this rule excludes from the set of affected permissions given by 'permissions'.

If a permission appears in
'permissions' *and* in 'excluded_permissions' then it will *not* be
subject to the policy effect.
The excluded permissions can be specified using the same syntax as
'permissions'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#excluded_permissions GoogleIamFolderAccessPolicy#excluded_permissions}

---

### GoogleIamFolderAccessPolicyTimeouts <a name="GoogleIamFolderAccessPolicyTimeouts" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

&googleiamfolderaccesspolicy.GoogleIamFolderAccessPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#create GoogleIamFolderAccessPolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#delete GoogleIamFolderAccessPolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#update GoogleIamFolderAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#create GoogleIamFolderAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#delete GoogleIamFolderAccessPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_iam_folder_access_policy#update GoogleIamFolderAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamFolderAccessPolicyDetailsOutputReference <a name="GoogleIamFolderAccessPolicyDetailsOutputReference" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamFolderAccessPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList">GoogleIamFolderAccessPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails">GoogleIamFolderAccessPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.rules"></a>

```go
func Rules() GoogleIamFolderAccessPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList">GoogleIamFolderAccessPolicyDetailsRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamFolderAccessPolicyDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetails">GoogleIamFolderAccessPolicyDetails</a>

---


### GoogleIamFolderAccessPolicyDetailsRulesConditionsList <a name="GoogleIamFolderAccessPolicyDetailsRulesConditionsList" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicyDetailsRulesConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIamFolderAccessPolicyDetailsRulesConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.get"></a>

```go
func Get(index *f64) GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference <a name="GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.resetExpression"></a>

```go
func ResetExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamFolderAccessPolicyDetailsRulesList <a name="GoogleIamFolderAccessPolicyDetailsRulesList" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicyDetailsRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIamFolderAccessPolicyDetailsRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.get"></a>

```go
func Get(index *f64) GoogleIamFolderAccessPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference <a name="GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions">ResetExcludedPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedPermissions` <a name="ResetExcludedPermissions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.resetExcludedPermissions"></a>

```go
func ResetExcludedPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput">ExcludedPermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions">ExcludedPermissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation">GoogleIamFolderAccessPolicyDetailsRulesOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedPermissionsInput`<sup>Optional</sup> <a name="ExcludedPermissionsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissionsInput"></a>

```go
func ExcludedPermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedPermissions`<sup>Required</sup> <a name="ExcludedPermissions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.excludedPermissions"></a>

```go
func ExcludedPermissions() *[]*string
```

- *Type:* *[]*string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamFolderAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation">GoogleIamFolderAccessPolicyDetailsRulesOperation</a>

---


### GoogleIamFolderAccessPolicyDetailsRulesOutputReference <a name="GoogleIamFolderAccessPolicyDetailsRulesOutputReference" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicyDetailsRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIamFolderAccessPolicyDetailsRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.putOperation">PutOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals">ResetExcludedPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOperation` <a name="PutOperation" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.putOperation"></a>

```go
func PutOperation(value GoogleIamFolderAccessPolicyDetailsRulesOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.putOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation">GoogleIamFolderAccessPolicyDetailsRulesOperation</a>

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludedPrincipals` <a name="ResetExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.resetExcludedPrincipals"></a>

```go
func ResetExcludedPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList">GoogleIamFolderAccessPolicyDetailsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.operation">Operation</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference">GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput">ExcludedPrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.operationInput">OperationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation">GoogleIamFolderAccessPolicyDetailsRulesOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals">ExcludedPrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.conditions"></a>

```go
func Conditions() GoogleIamFolderAccessPolicyDetailsRulesConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesConditionsList">GoogleIamFolderAccessPolicyDetailsRulesConditionsList</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.operation"></a>

```go
func Operation() GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference">GoogleIamFolderAccessPolicyDetailsRulesOperationOutputReference</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `ExcludedPrincipalsInput`<sup>Optional</sup> <a name="ExcludedPrincipalsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipalsInput"></a>

```go
func ExcludedPrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.operationInput"></a>

```go
func OperationInput() GoogleIamFolderAccessPolicyDetailsRulesOperation
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOperation">GoogleIamFolderAccessPolicyDetailsRulesOperation</a>

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `ExcludedPrincipals`<sup>Required</sup> <a name="ExcludedPrincipals" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.excludedPrincipals"></a>

```go
func ExcludedPrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyDetailsRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamFolderAccessPolicyTimeoutsOutputReference <a name="GoogleIamFolderAccessPolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleiamfolderaccesspolicy"

googleiamfolderaccesspolicy.NewGoogleIamFolderAccessPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamFolderAccessPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleIamFolderAccessPolicy.GoogleIamFolderAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



