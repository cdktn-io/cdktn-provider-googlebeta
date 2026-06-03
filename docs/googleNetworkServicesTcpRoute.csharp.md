# `googleNetworkServicesTcpRoute` Submodule <a name="`googleNetworkServicesTcpRoute` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesTcpRoute <a name="GoogleNetworkServicesTcpRoute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route google_network_services_tcp_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRoute(Construct Scope, string Id, GoogleNetworkServicesTcpRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig">GoogleNetworkServicesTcpRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig">GoogleNetworkServicesTcpRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetGateways">ResetGateways</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetMeshes">ResetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putRules"></a>

```csharp
private void PutRules(IResolvable|GoogleNetworkServicesTcpRouteRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesTcpRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGateways` <a name="ResetGateways" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetGateways"></a>

```csharp
private void ResetGateways()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMeshes` <a name="ResetMeshes" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetMeshes"></a>

```csharp
private void ResetMeshes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesTcpRoute resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTcpRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTcpRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTcpRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleNetworkServicesTcpRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleNetworkServicesTcpRoute resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesTcpRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesTcpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesTcpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList">GoogleNetworkServicesTcpRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference">GoogleNetworkServicesTcpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gatewaysInput">GatewaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshesInput">MeshesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gateways">Gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshes">Meshes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rules"></a>

```csharp
public GoogleNetworkServicesTcpRouteRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList">GoogleNetworkServicesTcpRouteRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeouts"></a>

```csharp
public GoogleNetworkServicesTcpRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference">GoogleNetworkServicesTcpRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GatewaysInput`<sup>Optional</sup> <a name="GatewaysInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gatewaysInput"></a>

```csharp
public string[] GatewaysInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MeshesInput`<sup>Optional</sup> <a name="MeshesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshesInput"></a>

```csharp
public string[] MeshesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.rulesInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.gateways"></a>

```csharp
public string[] Gateways { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Meshes`<sup>Required</sup> <a name="Meshes" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.meshes"></a>

```csharp
public string[] Meshes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesTcpRouteConfig <a name="GoogleNetworkServicesTcpRouteConfig" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    IResolvable|GoogleNetworkServicesTcpRouteRules[] Rules,
    string DeletionPolicy = null,
    string Description = null,
    string[] Gateways = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] Meshes = null,
    string Project = null,
    GoogleNetworkServicesTcpRouteTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.name">Name</a></code> | <code>string</code> | Name of the TcpRoute resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>[]</code> | rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.gateways">Gateways</a></code> | <code>string[]</code> | Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#id GoogleNetworkServicesTcpRoute#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the TcpRoute resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.meshes">Meshes</a></code> | <code>string[]</code> | Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#project GoogleNetworkServicesTcpRoute#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the TcpRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#name GoogleNetworkServicesTcpRoute#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.rules"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#rules GoogleNetworkServicesTcpRoute#rules}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#deletion_policy GoogleNetworkServicesTcpRoute#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#description GoogleNetworkServicesTcpRoute#description}

---

##### `Gateways`<sup>Optional</sup> <a name="Gateways" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.gateways"></a>

```csharp
public string[] Gateways { get; set; }
```

- *Type:* string[]

Gateways defines a list of gateways this TcpRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Each gateway reference should match the pattern: projects/* /locations/global/gateways/<gateway_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#gateways GoogleNetworkServicesTcpRoute#gateways}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#id GoogleNetworkServicesTcpRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the TcpRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#labels GoogleNetworkServicesTcpRoute#labels}

---

##### `Meshes`<sup>Optional</sup> <a name="Meshes" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.meshes"></a>

```csharp
public string[] Meshes { get; set; }
```

- *Type:* string[]

Meshes defines a list of meshes this TcpRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Each mesh reference should match the pattern: projects/* /locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#meshes GoogleNetworkServicesTcpRoute#meshes}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#project GoogleNetworkServicesTcpRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesTcpRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#timeouts GoogleNetworkServicesTcpRoute#timeouts}

---

### GoogleNetworkServicesTcpRouteRules <a name="GoogleNetworkServicesTcpRouteRules" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRules {
    GoogleNetworkServicesTcpRouteRulesAction Action,
    IResolvable|GoogleNetworkServicesTcpRouteRulesMatches[] Matches = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.matches">Matches</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>[]</code> | matches block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.action"></a>

```csharp
public GoogleNetworkServicesTcpRouteRulesAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#action GoogleNetworkServicesTcpRoute#action}

---

##### `Matches`<sup>Optional</sup> <a name="Matches" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules.property.matches"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesMatches[] Matches { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>[]

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#matches GoogleNetworkServicesTcpRoute#matches}

---

### GoogleNetworkServicesTcpRouteRulesAction <a name="GoogleNetworkServicesTcpRouteRulesAction" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesAction {
    IResolvable|GoogleNetworkServicesTcpRouteRulesActionDestinations[] Destinations = null,
    string IdleTimeout = null,
    bool|IResolvable OriginalDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | Specifies the idle timeout for the selected route. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.originalDestination">OriginalDestination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, Router will use the destination IP and port of the original connection as the destination of the request. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.destinations"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesActionDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#destinations GoogleNetworkServicesTcpRoute#destinations}

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; set; }
```

- *Type:* string

Specifies the idle timeout for the selected route.

The idle timeout is defined as the period in which there are no bytes sent or received on either the upstream or downstream connection. If not set, the default idle timeout is 30 seconds. If set to 0s, the timeout will be disabled.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#idle_timeout GoogleNetworkServicesTcpRoute#idle_timeout}

---

##### `OriginalDestination`<sup>Optional</sup> <a name="OriginalDestination" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction.property.originalDestination"></a>

```csharp
public bool|IResolvable OriginalDestination { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, Router will use the destination IP and port of the original connection as the destination of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#original_destination GoogleNetworkServicesTcpRoute#original_destination}

---

### GoogleNetworkServicesTcpRouteRulesActionDestinations <a name="GoogleNetworkServicesTcpRouteRulesActionDestinations" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesActionDestinations {
    string ServiceName = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.serviceName">ServiceName</a></code> | <code>string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.weight">Weight</a></code> | <code>double</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#service_name GoogleNetworkServicesTcpRoute#service_name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

This is computed as: weight/Sum(weights in this destination list). For non-zero values, there may be some epsilon from the exact proportion defined here depending on the precision an implementation supports.
If only one serviceName is specified and it has a weight greater than 0, 100% of the traffic is forwarded to that backend.
If weights are specified for any one service name, they need to be specified for all of them.
If weights are unspecified for all services, then, traffic is distributed in equal proportions to all of them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#weight GoogleNetworkServicesTcpRoute#weight}

---

### GoogleNetworkServicesTcpRouteRulesMatches <a name="GoogleNetworkServicesTcpRouteRulesMatches" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesMatches {
    string Address,
    string Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.address">Address</a></code> | <code>string</code> | Must be specified in the CIDR range format. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.port">Port</a></code> | <code>string</code> | Specifies the destination port to match against. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Must be specified in the CIDR range format.

A CIDR range consists of an IP Address and a prefix length to construct the subnet mask.
By default, the prefix length is 32 (i.e. matches a single IP address). Only IPV4 addresses are supported. Examples: "10.0.0.1" - matches against this exact IP address. "10.0.0.0/8" - matches against any IP address within the 10.0.0.0 subnet and 255.255.255.0 mask. "0.0.0.0/0" - matches against any IP address'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#address GoogleNetworkServicesTcpRoute#address}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Specifies the destination port to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#port GoogleNetworkServicesTcpRoute#port}

---

### GoogleNetworkServicesTcpRouteTimeouts <a name="GoogleNetworkServicesTcpRouteTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#create GoogleNetworkServicesTcpRoute#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#delete GoogleNetworkServicesTcpRoute#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#update GoogleNetworkServicesTcpRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#create GoogleNetworkServicesTcpRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#delete GoogleNetworkServicesTcpRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_tcp_route#update GoogleNetworkServicesTcpRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesTcpRouteRulesActionDestinationsList <a name="GoogleNetworkServicesTcpRouteRulesActionDestinationsList" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesActionDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.get"></a>

```csharp
private GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesActionDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>[]

---


### GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference <a name="GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesActionDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>

---


### GoogleNetworkServicesTcpRouteRulesActionOutputReference <a name="GoogleNetworkServicesTcpRouteRulesActionOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination">ResetOriginalDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|GoogleNetworkServicesTcpRouteRulesActionDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>[]

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```

##### `ResetOriginalDestination` <a name="ResetOriginalDestination" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.resetOriginalDestination"></a>

```csharp
private void ResetOriginalDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList">GoogleNetworkServicesTcpRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput">OriginalDestinationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination">OriginalDestination</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinations"></a>

```csharp
public GoogleNetworkServicesTcpRouteRulesActionDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinationsList">GoogleNetworkServicesTcpRouteRulesActionDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesActionDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionDestinations">GoogleNetworkServicesTcpRouteRulesActionDestinations</a>[]

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeoutInput"></a>

```csharp
public string IdleTimeoutInput { get; }
```

- *Type:* string

---

##### `OriginalDestinationInput`<sup>Optional</sup> <a name="OriginalDestinationInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestinationInput"></a>

```csharp
public bool|IResolvable OriginalDestinationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; }
```

- *Type:* string

---

##### `OriginalDestination`<sup>Required</sup> <a name="OriginalDestination" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.originalDestination"></a>

```csharp
public bool|IResolvable OriginalDestination { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkServicesTcpRouteRulesAction InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a>

---


### GoogleNetworkServicesTcpRouteRulesList <a name="GoogleNetworkServicesTcpRouteRulesList" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.get"></a>

```csharp
private GoogleNetworkServicesTcpRouteRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>[]

---


### GoogleNetworkServicesTcpRouteRulesMatchesList <a name="GoogleNetworkServicesTcpRouteRulesMatchesList" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesMatchesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.get"></a>

```csharp
private GoogleNetworkServicesTcpRouteRulesMatchesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesMatches[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>[]

---


### GoogleNetworkServicesTcpRouteRulesMatchesOutputReference <a name="GoogleNetworkServicesTcpRouteRulesMatchesOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesMatchesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesMatches InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>

---


### GoogleNetworkServicesTcpRouteRulesOutputReference <a name="GoogleNetworkServicesTcpRouteRulesOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putMatches">PutMatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resetMatches">ResetMatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction"></a>

```csharp
private void PutAction(GoogleNetworkServicesTcpRouteRulesAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a>

---

##### `PutMatches` <a name="PutMatches" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putMatches"></a>

```csharp
private void PutMatches(IResolvable|GoogleNetworkServicesTcpRouteRulesMatches[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>[]

---

##### `ResetMatches` <a name="ResetMatches" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.resetMatches"></a>

```csharp
private void ResetMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference">GoogleNetworkServicesTcpRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matches">Matches</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList">GoogleNetworkServicesTcpRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matchesInput">MatchesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.action"></a>

```csharp
public GoogleNetworkServicesTcpRouteRulesActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesActionOutputReference">GoogleNetworkServicesTcpRouteRulesActionOutputReference</a>

---

##### `Matches`<sup>Required</sup> <a name="Matches" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matches"></a>

```csharp
public GoogleNetworkServicesTcpRouteRulesMatchesList Matches { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatchesList">GoogleNetworkServicesTcpRouteRulesMatchesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.actionInput"></a>

```csharp
public GoogleNetworkServicesTcpRouteRulesAction ActionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesAction">GoogleNetworkServicesTcpRouteRulesAction</a>

---

##### `MatchesInput`<sup>Optional</sup> <a name="MatchesInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.matchesInput"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRulesMatches[] MatchesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesMatches">GoogleNetworkServicesTcpRouteRulesMatches</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteRules">GoogleNetworkServicesTcpRouteRules</a>

---


### GoogleNetworkServicesTcpRouteTimeoutsOutputReference <a name="GoogleNetworkServicesTcpRouteTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleNetworkServicesTcpRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleNetworkServicesTcpRouteTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesTcpRoute.GoogleNetworkServicesTcpRouteTimeouts">GoogleNetworkServicesTcpRouteTimeouts</a>

---



