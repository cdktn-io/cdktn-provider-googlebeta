# `googleWorkloadIdentityServiceAgent` Submodule <a name="`googleWorkloadIdentityServiceAgent` Submodule" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkloadIdentityServiceAgent <a name="GoogleWorkloadIdentityServiceAgent" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent google_workload_identity_service_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleWorkloadIdentityServiceAgent(Construct Scope, string Id, GoogleWorkloadIdentityServiceAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig">GoogleWorkloadIdentityServiceAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig">GoogleWorkloadIdentityServiceAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleWorkloadIdentityServiceAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleWorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleWorkloadIdentityServiceAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleWorkloadIdentityServiceAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleWorkloadIdentityServiceAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleWorkloadIdentityServiceAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleWorkloadIdentityServiceAgent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleWorkloadIdentityServiceAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleWorkloadIdentityServiceAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleWorkloadIdentityServiceAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.serviceAgents">ServiceAgents</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList">GoogleWorkloadIdentityServiceAgentServiceAgentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference">GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServiceAgents`<sup>Required</sup> <a name="ServiceAgents" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.serviceAgents"></a>

```csharp
public GoogleWorkloadIdentityServiceAgentServiceAgentsList ServiceAgents { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList">GoogleWorkloadIdentityServiceAgentServiceAgentsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeouts"></a>

```csharp
public GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference">GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleWorkloadIdentityServiceAgentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkloadIdentityServiceAgentConfig <a name="GoogleWorkloadIdentityServiceAgentConfig" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleWorkloadIdentityServiceAgentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string Id = null,
    GoogleWorkloadIdentityServiceAgentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.parent">Parent</a></code> | <code>string</code> | The parent resource path. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#id GoogleWorkloadIdentityServiceAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#parent GoogleWorkloadIdentityServiceAgent#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#id GoogleWorkloadIdentityServiceAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentConfig.property.timeouts"></a>

```csharp
public GoogleWorkloadIdentityServiceAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#timeouts GoogleWorkloadIdentityServiceAgent#timeouts}

---

### GoogleWorkloadIdentityServiceAgentServiceAgents <a name="GoogleWorkloadIdentityServiceAgentServiceAgents" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleWorkloadIdentityServiceAgentServiceAgents {

};
```


### GoogleWorkloadIdentityServiceAgentTimeouts <a name="GoogleWorkloadIdentityServiceAgentTimeouts" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleWorkloadIdentityServiceAgentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#create GoogleWorkloadIdentityServiceAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#delete GoogleWorkloadIdentityServiceAgent#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#create GoogleWorkloadIdentityServiceAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_workload_identity_service_agent#delete GoogleWorkloadIdentityServiceAgent#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkloadIdentityServiceAgentServiceAgentsList <a name="GoogleWorkloadIdentityServiceAgentServiceAgentsList" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleWorkloadIdentityServiceAgentServiceAgentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.get"></a>

```csharp
private GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference <a name="GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer">ServiceProducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents">GoogleWorkloadIdentityServiceAgentServiceAgents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ServiceProducer`<sup>Required</sup> <a name="ServiceProducer" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.serviceProducer"></a>

```csharp
public string ServiceProducer { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgentsOutputReference.property.internalValue"></a>

```csharp
public GoogleWorkloadIdentityServiceAgentServiceAgents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentServiceAgents">GoogleWorkloadIdentityServiceAgentServiceAgents</a>

---


### GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference <a name="GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleWorkloadIdentityServiceAgentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleWorkloadIdentityServiceAgent.GoogleWorkloadIdentityServiceAgentTimeouts">GoogleWorkloadIdentityServiceAgentTimeouts</a>

---



