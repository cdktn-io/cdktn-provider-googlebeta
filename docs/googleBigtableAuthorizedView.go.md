# `googleBigtableAuthorizedView` Submodule <a name="`googleBigtableAuthorizedView` Submodule" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableAuthorizedView <a name="GoogleBigtableAuthorizedView" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view google_bigtable_authorized_view}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.NewGoogleBigtableAuthorizedView(scope Construct, id *string, config GoogleBigtableAuthorizedViewConfig) GoogleBigtableAuthorizedView
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig">GoogleBigtableAuthorizedViewConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig">GoogleBigtableAuthorizedViewConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putSubsetView">PutSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetSubsetView">ResetSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubsetView` <a name="PutSubsetView" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putSubsetView"></a>

```go
func PutSubsetView(value GoogleBigtableAuthorizedViewSubsetView)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putSubsetView.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBigtableAuthorizedViewTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts">GoogleBigtableAuthorizedViewTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSubsetView` <a name="ResetSubsetView" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetSubsetView"></a>

```go
func ResetSubsetView()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigtableAuthorizedView resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.GoogleBigtableAuthorizedView_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.GoogleBigtableAuthorizedView_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.GoogleBigtableAuthorizedView_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.GoogleBigtableAuthorizedView_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBigtableAuthorizedView resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBigtableAuthorizedView to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBigtableAuthorizedView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigtableAuthorizedView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetView">SubsetView</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference">GoogleBigtableAuthorizedViewSubsetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference">GoogleBigtableAuthorizedViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetViewInput">SubsetViewInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubsetView`<sup>Required</sup> <a name="SubsetView" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetView"></a>

```go
func SubsetView() GoogleBigtableAuthorizedViewSubsetViewOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference">GoogleBigtableAuthorizedViewSubsetViewOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeouts"></a>

```go
func Timeouts() GoogleBigtableAuthorizedViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference">GoogleBigtableAuthorizedViewTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SubsetViewInput`<sup>Optional</sup> <a name="SubsetViewInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.subsetViewInput"></a>

```go
func SubsetViewInput() GoogleBigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.deletionProtection"></a>

```go
func DeletionProtection() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedView.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableAuthorizedViewConfig <a name="GoogleBigtableAuthorizedViewConfig" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

&googlebigtableauthorizedview.GoogleBigtableAuthorizedViewConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceName: *string,
	Name: *string,
	TableName: *string,
	DeletionPolicy: *string,
	DeletionProtection: *string,
	Id: *string,
	Project: *string,
	SubsetView: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.instanceName">InstanceName</a></code> | <code>*string</code> | The name of the Bigtable instance in which the authorized view belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.name">Name</a></code> | <code>*string</code> | The name of the authorized view. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.tableName">TableName</a></code> | <code>*string</code> | The name of the Bigtable table in which the authorized view belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.deletionProtection">DeletionProtection</a></code> | <code>*string</code> | A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#id GoogleBigtableAuthorizedView#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.subsetView">SubsetView</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a></code> | subset_view block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts">GoogleBigtableAuthorizedViewTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

The name of the Bigtable instance in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#instance_name GoogleBigtableAuthorizedView#instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the authorized view.

Must be 1-50 characters and must only contain hyphens, underscores, periods, letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#name GoogleBigtableAuthorizedView#name}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name of the Bigtable table in which the authorized view belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#table_name GoogleBigtableAuthorizedView#table_name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#deletion_policy GoogleBigtableAuthorizedView#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.deletionProtection"></a>

```go
DeletionProtection *string
```

- *Type:* *string

A field to make the authorized view protected against data loss i.e. when set to PROTECTED, deleting the authorized view, the table containing the authorized view, and the instance containing the authorized view would be prohibited. If not provided, currently deletion protection will be set to UNPROTECTED as it is the API default value. Note this field configs the deletion protection provided by the API in the backend, and should not be confused with Terraform-side deletion protection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#deletion_protection GoogleBigtableAuthorizedView#deletion_protection}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#id GoogleBigtableAuthorizedView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#project GoogleBigtableAuthorizedView#project}

---

##### `SubsetView`<sup>Optional</sup> <a name="SubsetView" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.subsetView"></a>

```go
SubsetView GoogleBigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

subset_view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#subset_view GoogleBigtableAuthorizedView#subset_view}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewConfig.property.timeouts"></a>

```go
Timeouts GoogleBigtableAuthorizedViewTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts">GoogleBigtableAuthorizedViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#timeouts GoogleBigtableAuthorizedView#timeouts}

---

### GoogleBigtableAuthorizedViewSubsetView <a name="GoogleBigtableAuthorizedViewSubsetView" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

&googlebigtableauthorizedview.GoogleBigtableAuthorizedViewSubsetView {
	FamilySubsets: interface{},
	RowPrefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.familySubsets">FamilySubsets</a></code> | <code>interface{}</code> | family_subsets block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.rowPrefixes">RowPrefixes</a></code> | <code>*[]*string</code> | Base64-encoded row prefixes to be included in the authorized view. |

---

##### `FamilySubsets`<sup>Optional</sup> <a name="FamilySubsets" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.familySubsets"></a>

```go
FamilySubsets interface{}
```

- *Type:* interface{}

family_subsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#family_subsets GoogleBigtableAuthorizedView#family_subsets}

---

##### `RowPrefixes`<sup>Optional</sup> <a name="RowPrefixes" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView.property.rowPrefixes"></a>

```go
RowPrefixes *[]*string
```

- *Type:* *[]*string

Base64-encoded row prefixes to be included in the authorized view.

To provide access to all rows, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#row_prefixes GoogleBigtableAuthorizedView#row_prefixes}

---

### GoogleBigtableAuthorizedViewSubsetViewFamilySubsets <a name="GoogleBigtableAuthorizedViewSubsetViewFamilySubsets" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

&googlebigtableauthorizedview.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets {
	FamilyName: *string,
	QualifierPrefixes: *[]*string,
	Qualifiers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName">FamilyName</a></code> | <code>*string</code> | Name of the column family to be included in the authorized view. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes">QualifierPrefixes</a></code> | <code>*[]*string</code> | Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers">Qualifiers</a></code> | <code>*[]*string</code> | Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view. |

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.familyName"></a>

```go
FamilyName *string
```

- *Type:* *string

Name of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#family_name GoogleBigtableAuthorizedView#family_name}

---

##### `QualifierPrefixes`<sup>Optional</sup> <a name="QualifierPrefixes" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifierPrefixes"></a>

```go
QualifierPrefixes *[]*string
```

- *Type:* *[]*string

Base64-encoded prefixes for qualifiers of the column family to be included in the authorized view.

Every qualifier starting with one of these prefixes is included in the authorized view. To provide access to all qualifiers, include the empty string as a prefix ("").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#qualifier_prefixes GoogleBigtableAuthorizedView#qualifier_prefixes}

---

##### `Qualifiers`<sup>Optional</sup> <a name="Qualifiers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsets.property.qualifiers"></a>

```go
Qualifiers *[]*string
```

- *Type:* *[]*string

Base64-encoded individual exact column qualifiers of the column family to be included in the authorized view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#qualifiers GoogleBigtableAuthorizedView#qualifiers}

---

### GoogleBigtableAuthorizedViewTimeouts <a name="GoogleBigtableAuthorizedViewTimeouts" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

&googlebigtableauthorizedview.GoogleBigtableAuthorizedViewTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#create GoogleBigtableAuthorizedView#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#update GoogleBigtableAuthorizedView#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#create GoogleBigtableAuthorizedView#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigtable_authorized_view#update GoogleBigtableAuthorizedView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList <a name="GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.NewGoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.get"></a>

```go
func Get(index *f64) GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference <a name="GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.NewGoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes">ResetQualifierPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers">ResetQualifiers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQualifierPrefixes` <a name="ResetQualifierPrefixes" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifierPrefixes"></a>

```go
func ResetQualifierPrefixes()
```

##### `ResetQualifiers` <a name="ResetQualifiers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.resetQualifiers"></a>

```go
func ResetQualifiers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput">FamilyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput">QualifierPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput">QualifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName">FamilyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes">QualifierPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers">Qualifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyNameInput`<sup>Optional</sup> <a name="FamilyNameInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyNameInput"></a>

```go
func FamilyNameInput() *string
```

- *Type:* *string

---

##### `QualifierPrefixesInput`<sup>Optional</sup> <a name="QualifierPrefixesInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixesInput"></a>

```go
func QualifierPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `QualifiersInput`<sup>Optional</sup> <a name="QualifiersInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiersInput"></a>

```go
func QualifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.familyName"></a>

```go
func FamilyName() *string
```

- *Type:* *string

---

##### `QualifierPrefixes`<sup>Required</sup> <a name="QualifierPrefixes" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifierPrefixes"></a>

```go
func QualifierPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Qualifiers`<sup>Required</sup> <a name="Qualifiers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.qualifiers"></a>

```go
func Qualifiers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBigtableAuthorizedViewSubsetViewOutputReference <a name="GoogleBigtableAuthorizedViewSubsetViewOutputReference" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.NewGoogleBigtableAuthorizedViewSubsetViewOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigtableAuthorizedViewSubsetViewOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets">PutFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets">ResetFamilySubsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes">ResetRowPrefixes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFamilySubsets` <a name="PutFamilySubsets" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets"></a>

```go
func PutFamilySubsets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.putFamilySubsets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFamilySubsets` <a name="ResetFamilySubsets" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetFamilySubsets"></a>

```go
func ResetFamilySubsets()
```

##### `ResetRowPrefixes` <a name="ResetRowPrefixes" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.resetRowPrefixes"></a>

```go
func ResetRowPrefixes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets">FamilySubsets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList">GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput">FamilySubsetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput">RowPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes">RowPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilySubsets`<sup>Required</sup> <a name="FamilySubsets" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsets"></a>

```go
func FamilySubsets() GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList">GoogleBigtableAuthorizedViewSubsetViewFamilySubsetsList</a>

---

##### `FamilySubsetsInput`<sup>Optional</sup> <a name="FamilySubsetsInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.familySubsetsInput"></a>

```go
func FamilySubsetsInput() interface{}
```

- *Type:* interface{}

---

##### `RowPrefixesInput`<sup>Optional</sup> <a name="RowPrefixesInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixesInput"></a>

```go
func RowPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RowPrefixes`<sup>Required</sup> <a name="RowPrefixes" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.rowPrefixes"></a>

```go
func RowPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetViewOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBigtableAuthorizedViewSubsetView
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewSubsetView">GoogleBigtableAuthorizedViewSubsetView</a>

---


### GoogleBigtableAuthorizedViewTimeoutsOutputReference <a name="GoogleBigtableAuthorizedViewTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebigtableauthorizedview"

googlebigtableauthorizedview.NewGoogleBigtableAuthorizedViewTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBigtableAuthorizedViewTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigtableAuthorizedView.GoogleBigtableAuthorizedViewTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



