# `googleBiglakeIcebergNamespaceIamPolicy` Submodule <a name="`googleBiglakeIcebergNamespaceIamPolicy` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergNamespaceIamPolicy <a name="GoogleBiglakeIcebergNamespaceIamPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy google_biglake_iceberg_namespace_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergnamespaceiampolicy"

googlebiglakeicebergnamespaceiampolicy.NewGoogleBiglakeIcebergNamespaceIamPolicy(scope Construct, id *string, config GoogleBiglakeIcebergNamespaceIamPolicyConfig) GoogleBiglakeIcebergNamespaceIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig">GoogleBiglakeIcebergNamespaceIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig">GoogleBiglakeIcebergNamespaceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergNamespaceIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergnamespaceiampolicy"

googlebiglakeicebergnamespaceiampolicy.GoogleBiglakeIcebergNamespaceIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergnamespaceiampolicy"

googlebiglakeicebergnamespaceiampolicy.GoogleBiglakeIcebergNamespaceIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergnamespaceiampolicy"

googlebiglakeicebergnamespaceiampolicy.GoogleBiglakeIcebergNamespaceIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergnamespaceiampolicy"

googlebiglakeicebergnamespaceiampolicy.GoogleBiglakeIcebergNamespaceIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBiglakeIcebergNamespaceIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBiglakeIcebergNamespaceIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBiglakeIcebergNamespaceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergNamespaceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergNamespaceIamPolicyConfig <a name="GoogleBiglakeIcebergNamespaceIamPolicyConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergnamespaceiampolicy"

&googlebiglakeicebergnamespaceiampolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Catalog: *string,
	NamespaceId: *string,
	PolicyData: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#catalog GoogleBiglakeIcebergNamespaceIamPolicy#catalog}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#namespace_id GoogleBiglakeIcebergNamespaceIamPolicy#namespace_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#policy_data GoogleBiglakeIcebergNamespaceIamPolicy#policy_data}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#id GoogleBiglakeIcebergNamespaceIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#project GoogleBiglakeIcebergNamespaceIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#catalog GoogleBiglakeIcebergNamespaceIamPolicy#catalog}.

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#namespace_id GoogleBiglakeIcebergNamespaceIamPolicy#namespace_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#policy_data GoogleBiglakeIcebergNamespaceIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#id GoogleBiglakeIcebergNamespaceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergNamespaceIamPolicy.GoogleBiglakeIcebergNamespaceIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_namespace_iam_policy#project GoogleBiglakeIcebergNamespaceIamPolicy#project}.

---



