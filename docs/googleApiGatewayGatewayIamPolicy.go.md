# `googleApiGatewayGatewayIamPolicy` Submodule <a name="`googleApiGatewayGatewayIamPolicy` Submodule" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayGatewayIamPolicy <a name="GoogleApiGatewayGatewayIamPolicy" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy google_api_gateway_gateway_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiampolicy"

googleapigatewaygatewayiampolicy.NewGoogleApiGatewayGatewayIamPolicy(scope Construct, id *string, config GoogleApiGatewayGatewayIamPolicyConfig) GoogleApiGatewayGatewayIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig">GoogleApiGatewayGatewayIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig">GoogleApiGatewayGatewayIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApiGatewayGatewayIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiampolicy"

googleapigatewaygatewayiampolicy.GoogleApiGatewayGatewayIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiampolicy"

googleapigatewaygatewayiampolicy.GoogleApiGatewayGatewayIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiampolicy"

googleapigatewaygatewayiampolicy.GoogleApiGatewayGatewayIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiampolicy"

googleapigatewaygatewayiampolicy.GoogleApiGatewayGatewayIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApiGatewayGatewayIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApiGatewayGatewayIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApiGatewayGatewayIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayGatewayIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayGatewayIamPolicyConfig <a name="GoogleApiGatewayGatewayIamPolicyConfig" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiampolicy"

&googleapigatewaygatewayiampolicy.GoogleApiGatewayGatewayIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Gateway: *string,
	PolicyData: *string,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.gateway">Gateway</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#gateway GoogleApiGatewayGatewayIamPolicy#gateway}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#policy_data GoogleApiGatewayGatewayIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#id GoogleApiGatewayGatewayIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#project GoogleApiGatewayGatewayIamPolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#region GoogleApiGatewayGatewayIamPolicy#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#gateway GoogleApiGatewayGatewayIamPolicy#gateway}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#policy_data GoogleApiGatewayGatewayIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#id GoogleApiGatewayGatewayIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#project GoogleApiGatewayGatewayIamPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamPolicy.GoogleApiGatewayGatewayIamPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_policy#region GoogleApiGatewayGatewayIamPolicy#region}.

---



