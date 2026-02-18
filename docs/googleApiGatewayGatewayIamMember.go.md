# `googleApiGatewayGatewayIamMember` Submodule <a name="`googleApiGatewayGatewayIamMember` Submodule" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayGatewayIamMember <a name="GoogleApiGatewayGatewayIamMember" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member google_api_gateway_gateway_iam_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

googleapigatewaygatewayiammember.NewGoogleApiGatewayGatewayIamMember(scope Construct, id *string, config GoogleApiGatewayGatewayIamMemberConfig) GoogleApiGatewayGatewayIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig">GoogleApiGatewayGatewayIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig">GoogleApiGatewayGatewayIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.putCondition"></a>

```go
func PutCondition(value GoogleApiGatewayGatewayIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition">GoogleApiGatewayGatewayIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApiGatewayGatewayIamMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

googleapigatewaygatewayiammember.GoogleApiGatewayGatewayIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

googleapigatewaygatewayiammember.GoogleApiGatewayGatewayIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

googleapigatewaygatewayiammember.GoogleApiGatewayGatewayIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

googleapigatewaygatewayiammember.GoogleApiGatewayGatewayIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleApiGatewayGatewayIamMember resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApiGatewayGatewayIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApiGatewayGatewayIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayGatewayIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference">GoogleApiGatewayGatewayIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition">GoogleApiGatewayGatewayIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.gatewayInput">GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.condition"></a>

```go
func Condition() GoogleApiGatewayGatewayIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference">GoogleApiGatewayGatewayIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.conditionInput"></a>

```go
func ConditionInput() GoogleApiGatewayGatewayIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition">GoogleApiGatewayGatewayIamMemberCondition</a>

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.gatewayInput"></a>

```go
func GatewayInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayGatewayIamMemberCondition <a name="GoogleApiGatewayGatewayIamMemberCondition" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

&googleapigatewaygatewayiammember.GoogleApiGatewayGatewayIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#expression GoogleApiGatewayGatewayIamMember#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#title GoogleApiGatewayGatewayIamMember#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#description GoogleApiGatewayGatewayIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#expression GoogleApiGatewayGatewayIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#title GoogleApiGatewayGatewayIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#description GoogleApiGatewayGatewayIamMember#description}.

---

### GoogleApiGatewayGatewayIamMemberConfig <a name="GoogleApiGatewayGatewayIamMemberConfig" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

&googleapigatewaygatewayiammember.GoogleApiGatewayGatewayIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Gateway: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.gateway">Gateway</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#gateway GoogleApiGatewayGatewayIamMember#gateway}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#member GoogleApiGatewayGatewayIamMember#member}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#role GoogleApiGatewayGatewayIamMember#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition">GoogleApiGatewayGatewayIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#id GoogleApiGatewayGatewayIamMember#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#project GoogleApiGatewayGatewayIamMember#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#region GoogleApiGatewayGatewayIamMember#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.gateway"></a>

```go
Gateway *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#gateway GoogleApiGatewayGatewayIamMember#gateway}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#member GoogleApiGatewayGatewayIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#role GoogleApiGatewayGatewayIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.condition"></a>

```go
Condition GoogleApiGatewayGatewayIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition">GoogleApiGatewayGatewayIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#condition GoogleApiGatewayGatewayIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#id GoogleApiGatewayGatewayIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#project GoogleApiGatewayGatewayIamMember#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_api_gateway_gateway_iam_member#region GoogleApiGatewayGatewayIamMember#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayGatewayIamMemberConditionOutputReference <a name="GoogleApiGatewayGatewayIamMemberConditionOutputReference" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googleapigatewaygatewayiammember"

googleapigatewaygatewayiammember.NewGoogleApiGatewayGatewayIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApiGatewayGatewayIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition">GoogleApiGatewayGatewayIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApiGatewayGatewayIamMemberCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGatewayIamMember.GoogleApiGatewayGatewayIamMemberCondition">GoogleApiGatewayGatewayIamMemberCondition</a>

---



